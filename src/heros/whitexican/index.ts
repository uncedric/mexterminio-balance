/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from '../types.ts';
import { HeroCategory } from '../../enums/HeroCategory.ts';
import { AdventurerAnimation } from '../../enums/AdventurerAnimation.ts';
import { ActionType } from '../../enums/ActionType.ts';
import { defaultMeleeAction, thirdPersonHandWeapon } from '../defaults.ts';

const WHITEXICAN_LEVITATION_HEIGHT = 10;
const WHITEXICAN_HEAL_PER_TICK = -10;
const WHITEXICAN_HEAL_RADIUS = 15;
const WHITEXICAN_HEAL_DURATION = 7;
const WHITEXICAN_HEAL_COOLDOWN = 7;

export const WHITEXICAN_HERO: Hero = {
  id: 'whitexican',
  name: 'Whitexican',
  race: 'Whitexican',
  category: HeroCategory.DPS,
  description:
    'Privilegiada que vive en una burbuja de desconexión social y económica, a menudo romantizando la carencia ajena desde su comodidad.',
  stats: {
    maxHealth: 80,
    moveSpeed: 12.0,
    hitboxSize: 0.8,
  },
  primaryAction: {
    name: 'Rifle de diseñador',
    type: ActionType.RAYCAST,
    damage: 40,
    cooldown: 0.2,
    maxDistance: 200,
    sound: 'whitexican_shoot.ogg',
  },
  secondaryAction: {
    name: 'Vibrar Alto',
    type: ActionType.AOE_HEAL,
    damage: WHITEXICAN_HEAL_PER_TICK,
    duration: WHITEXICAN_HEAL_DURATION,
    cooldown: WHITEXICAN_HEAL_COOLDOWN,
    maxDistance: WHITEXICAN_HEAL_RADIUS,
    levitationHeight: WHITEXICAN_LEVITATION_HEIGHT,
    color: '#4ade80',
    sound: 'vibrandoAlto.ogg',
    allowPrimaryFire: true,
  },
  meleeAction: defaultMeleeAction(),
  voiceLines: {
    spawn: 'whitexican_ready.ogg',
    death: 'whitexican_down.ogg',
  },
  modelPath: '/models/adventurers/Characters/gltf/Mannequin_Medium.glb',
  thumbnailPath: '/heros/thumbnails/whitexican.webp',
  renderMode: 'adventurer',
  animations: {
    idle: AdventurerAnimation.IDLE_A,
    run: AdventurerAnimation.RUNNING_HOLDING_RIFLE,
    shoot: AdventurerAnimation.RANGED_2H_SHOOT,
    jump: AdventurerAnimation.JUMP_START,
    jumpIdle: AdventurerAnimation.JUMP_IDLE,
    jumpLand: AdventurerAnimation.JUMP_LAND,
    death: AdventurerAnimation.DEATH_A,
    hitReact: AdventurerAnimation.HIT_A,
  },
  weapon: {
    modelPath: '/models/weapons/SteampunkRifle.glb',
    scale: 2,
    position: [0.4, -0.45, -0.9],
    rotation: [0, 0, 0],
    barrelPosition: [0, 0.12, -2.93],
  },
  thirdPersonWeapon: thirdPersonHandWeapon('/models/weapons/SteampunkRifle.glb', {
    scale: 0.4,
  }),
};
