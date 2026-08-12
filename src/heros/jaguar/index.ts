/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from '../types.ts';
import { HeroCategory, AdventurerAnimation, WeaponAnimationType } from '../../enums/index.ts';
import { ActionType } from '../../enums/ActionType.ts';
import { RIGHT_HAND_BONE, defaultMeleeAction, thirdPersonHandWeapon } from '../defaults.ts';

const JAGUAR_SWORD_DAMAGE = 35;
const JAGUAR_SWORD_COOLDOWN = 0.7;
// const JAGUAR_SWORD_DIST = 3.2;

const JAGUAR_MELEE_DAMAGE = 25;
const JAGUAR_MELEE_COOLDOWN = 0.8;
const JAGUAR_MELEE_DIST = 3.0;

const JAGUAR_SHIELD_SPEED_MODIFIER = 0.2;
const JAGUAR_JUMP_FORCE = 8;
const JAGUAR_GRAVITY_SCALE = 1;
const JAGUAR_JUMP_DASH_DISTANCE = 30;
const JAGUAR_JUMP_DASH_SPEED_MODIFIER = 3;

export const JAGUAR_HERO: Hero = {
  id: 'jaguar',
  name: 'Ocelotl',
  race: 'Guerrero Jaguar',
  category: HeroCategory.TANK,
  description:
    'Guerrero de élite azteca que domina el combate cuerpo a cuerpo con macahuitl y escudo (chimali).',
  stats: {
    maxHealth: 250,
    moveSpeed: 9.0,
    hitboxSize: 0.9,
    jumpForce: JAGUAR_JUMP_FORCE,
    gravityScale: JAGUAR_GRAVITY_SCALE,
    jumpDashDistance: JAGUAR_JUMP_DASH_DISTANCE,
    jumpDashSpeedModifier: JAGUAR_JUMP_DASH_SPEED_MODIFIER,
  },
  primaryAction: {
    name: 'Espada Jaguar',
    type: ActionType.AOE,
    damage: JAGUAR_SWORD_DAMAGE,
    cooldown: JAGUAR_SWORD_COOLDOWN,
    maxDistance: 6.5,
    sound: 'jaguar.ogg',
    animation: WeaponAnimationType.SWING,
    color: '#D49200', // Aztec Gold
    rayWidth: 0.4,
    knockback: 12,
  },
  secondaryAction: {
    name: 'Escudo',
    type: ActionType.MOVEMENT,
    damage: 0,
    cooldown: 0, // No cooldown for hold-to-activate
    speedModifier: JAGUAR_SHIELD_SPEED_MODIFIER,
    damageReduction: 0.2, // 80% reduction
    holdToActivate: true,
    allowPrimaryFire: true,
  },
  meleeAction: defaultMeleeAction({
    name: 'Golpe',
    damage: JAGUAR_MELEE_DAMAGE,
    cooldown: JAGUAR_MELEE_COOLDOWN,
    maxDistance: JAGUAR_MELEE_DIST,
  }),
  thirdAction: {
    name: 'Piel de Jaguar',
    description: 'Aumenta su velocidad de movimiento.',
    type: ActionType.MOVEMENT,
    damage: 0,
    cooldown: 8.0,
    duration: 4,
    speedModifier: 1.6,
  },
  voiceLines: {
    spawn: 'godinez_ready.ogg',
    death: 'godinez_down.ogg',
  },
  modelPath: '/models/heros/jaguar.glb',
  thumbnailPath: '/heros/jaguar.png',
  renderMode: 'adventurer',
  animations: {
    idle: AdventurerAnimation.IDLE_A,
    run: AdventurerAnimation.RUNNING_A,
    shoot: AdventurerAnimation.MELEE_2H_ATTACK_SLICE,
    secondary: AdventurerAnimation.MELEE_BLOCKING,
    jump: AdventurerAnimation.JUMP_START,
    jumpIdle: AdventurerAnimation.JUMP_IDLE,
    jumpLand: AdventurerAnimation.JUMP_LAND,
    death: AdventurerAnimation.DEATH_A,
    hitReact: AdventurerAnimation.HIT_A,
  },
  weapon: {
    modelPath: '/models/weapons/Macahuitl.glb',
    scale: 1.2,
    position: [0.4, -2.0, -0.5], // Hidden below view
    rotation: [Math.PI / 4, Math.PI / 2, 0],
    recoverySpeed: 3, // Slightly slower for the perfect weighted feel
  },
  thirdPersonWeapon: thirdPersonHandWeapon('/models/weapons/Macahuitl.glb', {
    scale: 1.0,
    rotation: [-1.95, -3, -0.2],
  }),
  thirdPersonSecondaryWeapon: thirdPersonHandWeapon('/models/weapons/escudo.glb', {
    scale: 1.0,
    bone: RIGHT_HAND_BONE,
  }),
  secondaryWeapon: {
    modelPath: '/models/weapons/escudo.glb',
    scale: 1,
    position: [-0.7, -0.3, -0.5],
    rotation: [0, Math.PI, 0],
  },
};
