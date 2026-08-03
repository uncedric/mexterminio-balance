/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from '../types.ts';
import { HeroCategory } from '../../enums/HeroCategory.ts';
import { AdventurerAnimation } from '../../enums/AdventurerAnimation.ts';
import { ActionType } from '../../enums/ActionType.ts';

export const THERIAN_HERO: Hero = {
  id: 'therian',
  name: 'Therian',
  race: 'Therian',
  category: HeroCategory.DPS,
  description: 'Bestia salvaje que desata su lado animal para moverse a velocidad sobrehumana.',
  stats: {
    maxHealth: 100,
    moveSpeed: 12.0,
    hitboxSize: 0.8,
  },
  primaryAction: {
    name: 'Water Gun',
    type: ActionType.RAYCAST,
    damage: 25,
    cooldown: 0.3,
    maxDistance: 50,
    color: '#3b82f6',
    sound: 'therian.ogg',
  },
  secondaryAction: {
    name: 'Modo Bestia',
    type: ActionType.MOVEMENT,
    damage: 0,
    cooldown: 7,
    duration: 4,
    speedModifier: 2,
    sound: 'bestia.ogg',
  },
  meleeAction: {
    name: 'Melee',
    type: ActionType.MELEE,
    damage: 30,
    cooldown: 0.8,
    maxDistance: 3,
    sound: 'slap.ogg',
  },
  voiceLines: {
    spawn: 'therian_ready.ogg',
    death: 'therian_down.ogg',
  },
  modelPath: '/models/adventurers/Characters/gltf/Mannequin_Medium.glb',
  renderMode: 'adventurer',
  animations: {
    idle: AdventurerAnimation.IDLE_A,
    run: AdventurerAnimation.RUNNING_A,
    shoot: AdventurerAnimation.RANGED_1H_SHOOT,
    jump: AdventurerAnimation.JUMP_START,
    jumpIdle: AdventurerAnimation.JUMP_IDLE,
    jumpLand: AdventurerAnimation.JUMP_LAND,
    death: AdventurerAnimation.DEATH_A,
    hitReact: AdventurerAnimation.HIT_A,
  },
  weapon: {
    modelPath: '/models/weapons/WaterGun.glb',
    scale: 1,
    position: [0.3, -0.2, -0.5],
    rotation: [0, Math.PI, 0],
    barrelPosition: [0, 0.05, -0.4],
  },
  thirdPersonWeapon: {
    modelPath: '/models/weapons/WaterGun.glb',
    scale: 0.5,
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    bone: 'handslotr',
  },
};
