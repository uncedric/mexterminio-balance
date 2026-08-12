/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from '../types.ts';
import { HeroCategory, WeaponAnimationType } from '../../enums/index.ts';
import { AdventurerAnimation } from '../../enums/AdventurerAnimation.ts';
import { ActionType } from '../../enums/ActionType.ts';
import { defaultMeleeAction, thirdPersonHandWeapon } from '../defaults.ts';

export const CHACALON_HERO: Hero = {
  id: 'chacalon',
  name: 'Brayan',
  race: 'Chacalon',
  category: HeroCategory.DPS,
  description:
    'Rápido y letal. Armado con una pequeña fusca con filo, Vizconde de Ecatepec, devorador de cesáreas ',
  stats: {
    maxHealth: 150,
    moveSpeed: 16.0, // High speed as per passive
    hitboxSize: 0.7,
  },
  primaryAction: {
    name: 'Escuadra',
    type: ActionType.RAYCAST,
    damage: 60,
    cooldown: 0.5,
    maxDistance: 15,
    burstCount: 1,
    burstInterval: 1,
    sound: 'knifegun.ogg',
  },
  secondaryAction: {
    name: 'Ráfaga de Plomo',
    description: 'Dispara una ráfaga rápida de 5 balas de su fusca',
    type: ActionType.RAYCAST,
    damage: 40,
    cooldown: 6.0,
    maxDistance: 15,
    burstCount: 6,
    burstInterval: 170,
    sound: 'knifegun.ogg',
    color: '#00f0ff',
    rayWidth: 0.15,
  },
  meleeAction: defaultMeleeAction({
    animation: WeaponAnimationType.STAB,
  }),
  thirdAction: {
    name: 'Pique Callejero',
    description: 'Aumenta su velocidad de movimiento durante 4 segundos.',
    type: ActionType.MOVEMENT,
    damage: 0,
    cooldown: 8.0,
    duration: 4,
    speedModifier: 1.6,
    sound: 'knifegun.ogg',
  },
  voiceLines: {
    spawn: 'ferras.ogg',
    death: 'ferras2.ogg',
  },
  weapon: {
    modelPath: '/models/weapons/KnifeGun.glb',
    scale: 1,
    position: [0.3, -0.2, -0.4],
    rotation: [1.45, 3.292, 1.65],
    barrelPosition: [0, 0.03, -0.3],
  },
  secondaryWeapon: {
    modelPath: '/models/weapons/KnifeGun.glb',
    scale: 1,
    position: [0.3, -0.2, -0.4],
    rotation: [1.45, 3.292, 1.65],
    barrelPosition: [0, 0.03, -0.3],
  },
  thirdPersonWeapon: thirdPersonHandWeapon('/models/weapons/KnifeGun.glb', {
    scale: 1,
  }),
  thirdPersonSecondaryWeapon: thirdPersonHandWeapon('/models/weapons/KnifeGun.glb', {
    scale: 1,
  }),
  modelPath: '/models/heros/chacal.glb',
  thumbnailPath: '/heros/thumbnails/chacalon.webp',
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
};
