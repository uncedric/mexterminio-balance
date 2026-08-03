import { describe, it, expect } from 'vitest';
import { ActionType } from '../enums/ActionType.ts';
import { AdventurerAnimation } from '../enums/AdventurerAnimation.ts';
import { HEROES, SELECTABLE_HERO_IDS } from './index.ts';
import { Hero, HeroAction } from './types.ts';

interface ValidationError {
  heroId: string;
  field: string;
  message: string;
  value: unknown;
}

function validateHeroAction(heroId: string, slot: string, action: HeroAction): ValidationError[] {
  const errors: ValidationError[] = [];
  const isExplicitHealType =
    action.type === ActionType.HEAL ||
    action.type === ActionType.AOE_HEAL ||
    action.type === ActionType.SELF_HEAL;
  const isHealValue = action.damage < 0;

  if (isExplicitHealType && action.damage >= 0) {
    errors.push({
      heroId,
      field: `${slot}.damage`,
      message:
        'Heal-specific action type (HEAL, AOE_HEAL, SELF_HEAL) must have negative damage value',
      value: action.damage,
    });
  }

  if (action.type === ActionType.MELEE && isHealValue) {
    errors.push({
      heroId,
      field: `${slot}.damage`,
      message: `Action type ${action.type} is strictly damage but has negative value (heal)`,
      value: action.damage,
    });
  }

  if (action.cooldown < 0) {
    errors.push({
      heroId,
      field: `${slot}.cooldown`,
      message: 'Cooldown cannot be negative',
      value: action.cooldown,
    });
  }

  if (action.cooldown > 120) {
    errors.push({
      heroId,
      field: `${slot}.cooldown`,
      message: 'Cooldown seems excessively high (> 120s)',
      value: action.cooldown,
    });
  }

  if (action.type === ActionType.PROJECTILE && !action.projectile) {
    errors.push({
      heroId,
      field: `${slot}.projectile`,
      message: 'Projectile action must have projectile configuration',
      value: action.projectile,
    });
  }

  if (action.type === ActionType.MOVEMENT && !action.impulse && !action.speedModifier) {
    errors.push({
      heroId,
      field: `${slot}.type`,
      message: 'Movement action should have either impulse or speedModifier',
      value: action.type,
    });
  }

  return errors;
}

function validateHero(hero: Hero): ValidationError[] {
  const errors: ValidationError[] = [];

  if (hero.stats.maxHealth <= 0) {
    errors.push({
      heroId: hero.id,
      field: 'stats.maxHealth',
      message: 'Max health must be positive',
      value: hero.stats.maxHealth,
    });
  }

  if (hero.stats.moveSpeed <= 0) {
    errors.push({
      heroId: hero.id,
      field: 'stats.moveSpeed',
      message: 'Move speed must be positive',
      value: hero.stats.moveSpeed,
    });
  }

  errors.push(...validateHeroAction(hero.id, 'primaryAction', hero.primaryAction));
  errors.push(...validateHeroAction(hero.id, 'secondaryAction', hero.secondaryAction));
  errors.push(...validateHeroAction(hero.id, 'meleeAction', hero.meleeAction));

  if (!hero.modelPath.startsWith('/models/')) {
    errors.push({
      heroId: hero.id,
      field: 'modelPath',
      message: 'Model path should start with /models/',
      value: hero.modelPath,
    });
  }

  return errors;
}

function validateAllHeroes(
  heroes: Record<string, Hero>,
  selectableIds?: Set<string>,
): ValidationError[] {
  const allErrors = Object.values(heroes).flatMap(validateHero);

  if (selectableIds) {
    for (const id of selectableIds) {
      if (!heroes[id]) {
        allErrors.push({
          heroId: id,
          field: 'SELECTABLE_HERO_IDS',
          message: 'Selectable hero ID does not exist in HEROES record',
          value: id,
        });
      }
    }
  }

  return allErrors;
}

describe('Hero Data Integrity', () => {
  it('all registered heroes should pass validation', () => {
    const errors = validateAllHeroes(HEROES, SELECTABLE_HERO_IDS);

    if (errors.length > 0) {
      const errorMessages = errors
        .map((e) => `[${e.heroId}] ${e.field}: ${e.message} (value: ${JSON.stringify(e.value)})`)
        .join('\n');

      throw new Error(`Hero validation failed with ${errors.length} errors:\n${errorMessages}`);
    }

    expect(errors.length).toBe(0);
  });

  it('Chacalon uses the more visible adventurer idle clip', () => {
    expect(HEROES.chacalon.animations?.idle).toBe(AdventurerAnimation.IDLE_A);
  });
});
