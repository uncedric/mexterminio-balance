/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero, HeroAction } from './types.ts';
import { ActionType } from '../enums/ActionType.ts';
import { FEMINISTA_HERO } from './feminista/index.ts';
import { CHACALON_HERO } from './chacalon/index.ts';
import { GODINEZ_HERO } from './godinez/index.ts';
import { SENOR_HERO } from './senor/index.ts';
import { TRANSFORMER_HERO } from './transformer/index.ts';
// import { DOCTOR_HERO } from './doctor/index.ts';
import { SHREXICAN_HERO } from './shrexican/index.ts';
// import { BUCHONA_HERO } from './buchona/index.ts';
// import { THERIAN_HERO } from './therian/index.ts';
// import { PERRO_HERO } from './perro/index.ts';
// import { NOMADA_DIGITAL_HERO } from './nomada_digital/index.ts';
import { JAGUAR_HERO } from './jaguar/index.ts';
import { VOLADOR_HERO } from './volador/index.ts';
import { CHAMAN_HERO } from './chaman/index.ts';

export * from './types.ts';

export const HEROES: Record<string, Hero> = {
  // whitexican: WHITEXICAN_HERO,
  jaguar: JAGUAR_HERO,
  feminista: FEMINISTA_HERO,
  godinez: GODINEZ_HERO,
  senor: SENOR_HERO,
  chacalon: CHACALON_HERO,
  transformer: TRANSFORMER_HERO,
  // doctor: DOCTOR_HERO,
  shrexican: SHREXICAN_HERO,
  // buchona: BUCHONA_HERO,
  // therian: THERIAN_HERO,
  // perro: PERRO_HERO,
  // nomada: NOMADA_DIGITAL_HERO,

  volador: VOLADOR_HERO,
  chaman: CHAMAN_HERO,
};

export const DEFAULT_HERO = JAGUAR_HERO;

export const SELECTABLE_HERO_IDS = new Set([
  // 'whitexican',
  'feminista',
  'senor',
  // 'jaguar',
  'chaman',
  'volador',
  // 'nomada',
  // 'perro',
  'transformer',
  'godinez',
  // 'shrexican',
  'chacalon',
  // 'buchona',
]);

export function getHero(id: string): Hero {
  return HEROES[id] || DEFAULT_HERO;
}

/** Resolves only heroes that are both registered and exposed in the selectable roster. */
export function getSelectableHero(id: string): Hero | undefined {
  if (!SELECTABLE_HERO_IDS.has(id)) {
    return undefined;
  }
  return HEROES[id];
}

/** Returns the first hero action whose type matches, regardless of which slot it occupies. */
export function getHeroActionByType(hero: Hero, type: ActionType): HeroAction | undefined {
  const actions = [hero.primaryAction, hero.secondaryAction, hero.meleeAction];
  if (hero.thirdAction) {
    actions.push(hero.thirdAction);
  }
  return actions.find((a) => a.type === type);
}

/** Returns true if the hero's secondary action is a shield that stays active until toggled or depleted. */
export function isToggleShield(hero: Hero): boolean {
  const sec = hero.secondaryAction;
  return !!sec.shieldHealth && !sec.duration;
}

/** Returns true if the hero's secondary action is a shield with a fixed duration. */
export function isTimedShield(hero: Hero): boolean {
  const sec = hero.secondaryAction;
  return !!sec.shieldHealth && !!sec.duration;
}

/** Returns true if the hero has a specific weapon model for their secondary action (e.g. physical shield/desk). */
export function hasPhysicalSecondary(hero: Hero): boolean {
  return !!hero.secondaryWeapon;
}

/** Returns true if an action is primarily for healing (based on type or negative damage). */
export function isHealingAction(action: HeroAction): boolean {
  return (
    action.type === ActionType.HEAL ||
    action.type === ActionType.SELF_HEAL ||
    action.type === ActionType.AOE_HEAL ||
    action.damage < 0
  );
}

/**
 * Returns the weapon configuration and visibility state for a hero based on their
 * secondary action state and perspective. Centralizes logic for PlayerView and OtherPlayer.
 */
export function getActiveWeapon(
  hero: Hero,
  isUsingSecondary: boolean,
  perspective: '1p' | '3p' = '3p',
) {
  // DEPLOY actions place the object in the world — don't switch the held weapon visual
  const showSecondaryInHand = isUsingSecondary && hero.secondaryAction.type !== ActionType.DEPLOY;

  let primary = hero.weapon;
  let secondary = hero.secondaryWeapon;

  if (perspective === '1p') {
    primary = hero.firstPersonWeapon || primary;
    secondary = hero.firstPersonSecondaryWeapon || secondary;
  } else {
    primary = hero.thirdPersonWeapon || primary;
    secondary = hero.thirdPersonSecondaryWeapon || secondary;
  }

  const activeWeapon = showSecondaryInHand && secondary ? secondary : primary;
  const isHidden = !activeWeapon;

  return {
    weapon: activeWeapon,
    isHidden,
    showSecondaryInHand,
  };
}
