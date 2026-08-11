import { Hero } from '../types.ts';
import { HeroCategory } from '../../enums/HeroCategory.ts';
import { ActionType } from '../../enums/ActionType.ts';
import {
  RIGHT_FIST_BONE,
  defaultMeleeAction,
  thirdPersonAssaultRifle,
  thirdPersonHandWeapon,
} from '../defaults.ts';
import { ADVENTURER_RANGED_2H_ANIMATIONS } from '../defaults.ts';

const GODINEZ_SHIELD_DURATION = 20;
const GODINEZ_SHIELD_COOLDOWN = 8;

export const GODINEZ_HERO: Hero = {
  id: 'godinez',
  name: 'Godinez',
  race: 'Godinez',
  category: HeroCategory.TANK,
  description:
    'Empleado que rinde culto al café de máquina, sobrevive al tráfico por la quincena y encuentra su mayor libertad en el viernes casual y el tupper de cristal.',
  stats: {
    maxHealth: 250,
    moveSpeed: 8.0,
    hitboxSize: 1.0,
  },
  primaryAction: {
    name: 'Rifle de asalto',
    type: ActionType.RAYCAST,
    damage: 20,
    cooldown: 0.4,
    maxDistance: 50,
    sound: 'click.ogg',
  },
  secondaryAction: {
    name: 'Escritorio',
    description: 'Pone un escudo que te protege de los proyectiles enemigos.',
    type: ActionType.DEPLOY,
    damage: 0,
    cooldown: GODINEZ_SHIELD_COOLDOWN,
    duration: GODINEZ_SHIELD_DURATION,
    shieldHealth: 500,
    sound: 'windows.ogg',
    allowPrimaryFire: true,
  },
  meleeAction: defaultMeleeAction(),
  thirdAction: {
    name: 'Blindaje Oficinista',
    description: 'Reduce el daño recibido en un 50% durante 5 segundos.',
    type: ActionType.MOVEMENT,
    damage: 0,
    cooldown: 10.0,
    duration: 5,
    damageReduction: 0.5,
    sound: 'click.ogg',
  },
  voiceLines: {
    spawn: 'godinez_ready.ogg',
    death: 'godinez_down.ogg',
  },
  modelPath: '/models/heros/godin.glb',
  renderMode: 'adventurer',
  animations: ADVENTURER_RANGED_2H_ANIMATIONS,
  weapon: {
    modelPath: '/models/weapons/AR2.glb',
    scale: 1,
    position: [0.4, -0.3, -0.6],
    rotation: [0, Math.PI / 2, 0],
    barrelPosition: [0, 0.05, -0.3],
  },
  // secondaryWeapon: {
  //   modelPath: '/models/weapons/DeskShield.glb',
  //   scale: 1,
  //   position: [0.7, -0.3, -0.6],
  //   rotation: [0, Math.PI, 0],
  //   duration: GODINEZ_SHIELD_DURATION,
  // },
  secondaryWeapon: {
    modelPath: '/models/objects/Desk.glb',
    scale: 2,
    position: [0.7, -0.3, -0.6],
    rotation: [0, Math.PI * 1.5, 0],
    duration: GODINEZ_SHIELD_DURATION,
  },
  thirdPersonWeapon: thirdPersonAssaultRifle({ rotation: [0, 0, 0.05] }),
  thirdPersonSecondaryWeapon: thirdPersonHandWeapon('/models/objects/Desk.glb', {
    scale: 2,
    rotation: [0, 0, -0.7],
    bone: RIGHT_FIST_BONE,
  }),
};
