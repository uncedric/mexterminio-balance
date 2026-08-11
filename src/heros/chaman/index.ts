/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from '../types.ts';
import { HeroCategory } from '../../enums/HeroCategory.ts';
import { AdventurerAnimation } from '../../enums/AdventurerAnimation.ts';
import { ActionType } from '../../enums/ActionType.ts';
import { defaultMeleeAction, thirdPersonHandWeapon } from '../defaults.ts';

export const CHAMAN_HERO: Hero = {
  id: 'chaman',
  name: 'Chaman',
  race: 'Chaman',
  category: HeroCategory.HEALER,
  description:
    'Un guía espiritual que utiliza la energía de la naturaleza para castigar a sus enemigos y sanar a sus aliados con proyectiles místicos.',
  stats: {
    maxHealth: 120,
    moveSpeed: 9.0,
    hitboxSize: 0.85,
  },
  primaryAction: {
    name: 'Rayo Natural',
    type: ActionType.PROJECTILE,
    damage: 35,
    cooldown: 0.9,
    maxDistance: 60,
    projectile: {
      radius: 0.2,
      speed: 45,
      color: '#4CAF50',
      shape: 'sphere',
    },
    sound: 'shoot.ogg',
  },
  secondaryAction: {
    name: 'Esfera de Vida',
    type: ActionType.PROJECTILE,
    damage: -30,
    cooldown: 1.5,
    maxDistance: 40,
    projectile: {
      radius: 0.4,
      speed: 30,
      color: '#81C784',
      shape: 'sphere',
    },
    sound: 'feminazi_heal.ogg',
  },
  meleeAction: defaultMeleeAction({
    name: 'Golpe de Bastón',
    damage: 25,
  }),
  thirdAction: {
    name: 'Vibrar Alto',
    description: 'Restaura salud propia mediante meditación espiritual instantánea.',
    type: ActionType.SELF_HEAL,
    damage: -50,
    cooldown: 11,
    sound: 'vibrandoAlto.ogg',
  },
  voiceLines: {
    spawn: 'vibrandoAlto.ogg',
    death: 'ferras.ogg',
  },
  modelPath: '/models/adventurers/Characters/gltf/Druid.glb',
  renderMode: 'adventurer',
  animations: {
    idle: AdventurerAnimation.IDLE_B,
    run: AdventurerAnimation.RUNNING_HOLDING_RIFLE,
    shoot: AdventurerAnimation.RANGED_MAGIC_SHOOT,
    jump: AdventurerAnimation.JUMP_START,
    jumpIdle: AdventurerAnimation.JUMP_IDLE,
    jumpLand: AdventurerAnimation.JUMP_LAND,
    death: AdventurerAnimation.DEATH_A,
    hitReact: AdventurerAnimation.HIT_A,
  },
  weapon: {
    modelPath: '/models/adventurers/Assets/gltf/druid_staff.gltf',
    scale: 0.7,
    position: [0.3, -0.2, -0.2],
    rotation: [-0.85, -0.15, -0.25],
    barrelPosition: [0, 0, 0.8],
    spawnForwardOffset: 1.2,
  },
  thirdPersonWeapon: thirdPersonHandWeapon('/models/adventurers/Assets/gltf/druid_staff.gltf', {
    scale: 1.0,
    spawnForwardOffset: 1.2,
  }),
};
