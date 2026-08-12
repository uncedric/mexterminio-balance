/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from '../types.ts';
import { HeroCategory } from '../../enums/HeroCategory.ts';
import { ActionType } from '../../enums/ActionType.ts';
import {
  ADVENTURER_RANGED_2H_ANIMATIONS,
  defaultMeleeAction,
  thirdPersonAssaultRifle,
} from '../defaults.ts';

export const FEMINISTA_HERO: Hero = {
  id: 'feminista',
  name: 'Frida',
  race: 'Activista',
  category: HeroCategory.HEALER,
  description: 'Cancela y deconstruye a base de su pistola de colores',
  stats: {
    maxHealth: 125,
    moveSpeed: 10.0,
    hitboxSize: 0.8,
  },
  primaryAction: {
    name: 'Cancelar',
    type: ActionType.RAYCAST,
    damage: 15,
    cooldown: 1.2,
    maxDistance: 70,
    sound: 'spray.ogg',
    burstCount: 6,
    burstInterval: 100,
    color: '#a538d7',
  },
  secondaryAction: {
    name: 'Deconstruir',
    description: 'Cura aliados con pintura verde',
    type: ActionType.HEAL,
    damage: -15,
    cooldown: 2.0,
    maxDistance: 20,
    sound: 'feminista_heal.wav',
    burstCount: 8,
    burstInterval: 80,
    color: '#1ba11b',
    leavesBulletMark: true,
  },
  meleeAction: defaultMeleeAction(),
  thirdAction: {
    name: 'Auto-Deconstrucción',
    description: 'Se cura 70 puntos de vida en 5 segundos.',
    type: ActionType.SELF_HEAL,
    damage: -70,
    cooldown: 15.0,
    duration: 5,
    sound: 'feminista_heal.wav',
  },

  voiceLines: {
    spawn: 'feminista_ready.ogg',
    death: 'feminista_down.ogg',
  },
  modelPath: '/models/heros/feminista.glb',
  thumbnailPath: '/heros/thumbnails/feminista.webp',
  renderMode: 'adventurer',
  animations: ADVENTURER_RANGED_2H_ANIMATIONS,
  weapon: {
    modelPath: '/models/weapons/AssaultRifle.glb',
    scale: 1,
    position: [0.4, -0.3, -0.6],
    rotation: [0, Math.PI / 2, 0],
    barrelPosition: [0, 0.05, -0.3],
  },
  thirdPersonWeapon: thirdPersonAssaultRifle({ rotation: [0, 0, 0.05] }),
  thirdPersonSecondaryWeapon: thirdPersonAssaultRifle({ rotation: [0, 0, 0.05] }),
};
