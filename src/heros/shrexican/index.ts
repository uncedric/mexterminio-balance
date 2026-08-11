import { Hero } from '../types.ts';
import { HeroCategory } from '../../enums/HeroCategory.ts';
import { ActionType } from '../../enums/ActionType.ts';
import {
  ADVENTURER_RANGED_1H_ANIMATIONS,
  defaultMeleeAction,
  thirdPersonHandWeapon,
} from '../defaults.ts';

export const SHREXICAN_HERO: Hero = {
  id: 'shrexican',
  name: 'Shrexican',
  race: 'Shrexican',
  category: HeroCategory.HEALER,
  description:
    'Abrazan una estética popular y urbana con orgullo, a menudo fusionando la cultura del barrio con un estilo de vida aspiracional y despreocupado. Es un poco alucin',
  stats: {
    maxHealth: 150,
    moveSpeed: 7.0,
    hitboxSize: 1.0,
  },
  primaryAction: {
    name: 'Pistolón',
    type: ActionType.RAYCAST,
    damage: 30,
    cooldown: 0.8,
    maxDistance: 20,
    sound: 'shoot.ogg',
  },
  secondaryAction: {
    name: 'Bocina Curativa',
    type: ActionType.DEPLOY,
    damage: -20, // Healing amount per tick
    cooldown: 15.0,
    maxDistance: 5, // 5 meters radius
    duration: 7, // seconds before the object disappears
    sound: 'bocina.ogg',
    allowPrimaryFire: true,
  },
  meleeAction: defaultMeleeAction(),
  thirdAction: {
    name: 'Grito de Pantano',
    description: 'Ráfaga de onda expansiva que causa daño a enemigos cercanos.',
    type: ActionType.AOE,
    damage: 35,
    cooldown: 9.0,
    maxDistance: 7,
    sound: 'slap.ogg',
  },
  voiceLines: {
    spawn: 'señor.ogg', // Fixed path
    death: 'slap.ogg', // Fixed path
  },
  modelPath: '/models/heros/Shrexican.glb',
  renderMode: 'adventurer',
  animations: ADVENTURER_RANGED_1H_ANIMATIONS,
  weapon: {
    modelPath: '/models/weapons/Pistol1H.glb',
    scale: 1,
    position: [0.4, -0.3, -0.6],
    rotation: [1.6, 1.571, 0],
    barrelPosition: [0, 0.05, -0.3],
  },
  thirdPersonWeapon: thirdPersonHandWeapon('/models/weapons/Pistol1H.glb', {
    scale: 1.0,
    rotation: [0.1, 0.4, -1],
  }),
  secondaryWeapon: {
    modelPath: '/models/weapons/Speaker.glb',
    scale: 0.5,
    position: [0.4, -0.3, -0.5],
    rotation: [0, 0, 0],
  },
};
