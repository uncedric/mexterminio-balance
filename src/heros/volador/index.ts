/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from '../types.ts';
import { HeroCategory } from '../../enums/HeroCategory.ts';
import { AdventurerAnimation } from '../../enums/AdventurerAnimation.ts';
import { ActionType } from '../../enums/ActionType.ts';
import { defaultMeleeAction, thirdPersonHandWeapon } from '../defaults.ts';

export const VOLADOR_HERO: Hero = {
  id: 'volador',
  name: 'Bartolo',
  race: 'Volador de Papantla',
  category: HeroCategory.DPS,
  description:
    'Guardián ancestral del cielo, desciende en espiral desde lo alto del poste sagrado para defender su tierra con arco y flecha.',
  stats: {
    maxHealth: 150,
    moveSpeed: 11.0,
    hitboxSize: 0.8,
  },
  primaryAction: {
    name: 'Flecha',
    type: ActionType.PROJECTILE,
    damage: 40,
    cooldown: 1.2,
    maxDistance: 200,
    sound: 'scifi_bow.ogg',
    projectile: {
      radius: 0.1,
      speed: 60,
      color: '#c8a000',
      modelPath: '/models/adventurers/Assets/gltf/arrow_bow.glb',
      rotation: [-Math.PI / 2, 0, 0], // Align model Z-forward with parent Y-up
      scale: 1.5,
    },
  },
  secondaryAction: {
    name: 'Volar',
    description: '',
    type: ActionType.MOVEMENT,
    damage: 0,
    duration: 5,
    cooldown: 7.0,
    impulse: [0, 40, 0],
    sound: 'volador2.ogg',
  },
  meleeAction: defaultMeleeAction(),
  thirdAction: {
    name: 'Viento Veloz',
    description: 'Aumenta su velocidad de movimiento durante 4 segundos.',
    type: ActionType.MOVEMENT,
    damage: 0,
    cooldown: 8.0,
    duration: 4,
    speedModifier: 1.6,
    sound: 'scifi_bow.ogg',
  },
  voiceLines: {
    spawn: 'volador_ready.ogg',
    death: 'volador_down.ogg',
  },
  modelPath: '/models/heros/volador.glb',
  thumbnailPath: '/heros/thumbnails/volador.webp',
  renderMode: 'adventurer',
  weapon: {
    modelPath: '/models/weapons/CrossBow2H.glb',
    scale: 1,
    position: [0.35, -0.35, -0.7],
    rotation: [1.45, 1.571, 0.15],
    barrelPosition: [0, 0, 0],
    spawnForwardOffset: 1.2,
  },
  thirdPersonWeapon: thirdPersonHandWeapon('/models/weapons/CrossBow2H.glb', {
    scale: 1.0,
    rotation: [0.1, 0.05, -0.3],
  }),
  animations: {
    idle: AdventurerAnimation.RANGED_2H_AIMING,
    run: AdventurerAnimation.RUNNING_HOLDING_BOW,
    shoot: AdventurerAnimation.RANGED_2H_SHOOT,
    jump: AdventurerAnimation.JUMP_START,
    jumpIdle: AdventurerAnimation.JUMP_IDLE,
    jumpLand: AdventurerAnimation.JUMP_LAND,
    death: AdventurerAnimation.DEATH_A,
    hitReact: AdventurerAnimation.HIT_A,
  },
};
