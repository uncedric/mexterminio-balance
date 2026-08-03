import { ActionType } from '../enums/ActionType.ts';
import { AdventurerAnimation } from '../enums/AdventurerAnimation.ts';
import { HeroAction, HeroAnimations, HeroWeapon } from './types.ts';

export const RIGHT_HAND_BONE = 'handslotr';
export const LEFT_HAND_BONE = 'handslotl';
export const RIGHT_FIST_BONE = 'fistr';
export const LEFT_FIST_BONE = 'fistl';

export const ADVENTURER_RANGED_2H_ANIMATIONS: HeroAnimations = {
  idle: AdventurerAnimation.RANGED_2H_AIMING,
  run: AdventurerAnimation.RUNNING_A,
  shoot: AdventurerAnimation.RANGED_2H_SHOOT,
  jump: AdventurerAnimation.JUMP_START,
  jumpIdle: AdventurerAnimation.JUMP_IDLE,
  jumpLand: AdventurerAnimation.JUMP_LAND,
  death: AdventurerAnimation.DEATH_A,
  hitReact: AdventurerAnimation.HIT_A,
};

export const ADVENTURER_RANGED_1H_ANIMATIONS: HeroAnimations = {
  idle: AdventurerAnimation.IDLE_B,
  run: AdventurerAnimation.RUNNING_A,
  shoot: AdventurerAnimation.RANGED_1H_SHOOT,
  jump: AdventurerAnimation.JUMP_START,
  jumpIdle: AdventurerAnimation.JUMP_IDLE,
  jumpLand: AdventurerAnimation.JUMP_LAND,
  death: AdventurerAnimation.DEATH_A,
  hitReact: AdventurerAnimation.HIT_A,
};

export function defaultMeleeAction(overrides: Partial<HeroAction> = {}): HeroAction {
  return {
    name: 'Melee',
    type: ActionType.MELEE,
    damage: 30,
    cooldown: 0.8,
    maxDistance: 3,
    sound: 'slap.ogg',
    knockback: 6,
    ...overrides,
  };
}

export function thirdPersonHandWeapon(
  modelPath: string,
  overrides: Partial<HeroWeapon> = {},
): HeroWeapon {
  return {
    modelPath,
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    bone: RIGHT_HAND_BONE,
    ...overrides,
  };
}

export function thirdPersonAssaultRifle(overrides: Partial<HeroWeapon> = {}): HeroWeapon {
  return thirdPersonHandWeapon('/models/weapons/AR.glb', {
    scale: 0.9,
    rotation: [0, 0, -0.7],
    ...overrides,
  });
}
