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
const GODINEZ_SHIELD_COOLDOWN = 5;

export const GODINEZ_HERO: Hero = {
  id: 'godinez',
  name: 'Godinez',
  race: 'Godinez',
  category: HeroCategory.TANK,
  description:
    'Empleado que rinde culto al café de máquina, sobrevive al tráfico por la quincena y encuentra su mayor libertad en el viernes casual y el tupper de cristal.',
  stats: {
    maxHealth: 350,
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
    name: 'Escudo Rectangular',
    description: 'Levanta un escudo rectangular de 6m x 3m mientras sostienes el botón.',
    type: ActionType.MOVEMENT,
    damage: 0,
    cooldown: GODINEZ_SHIELD_COOLDOWN,
    shieldHealth: 500,
    speedModifier: 1.0,
    holdToActivate: true,
    allowPrimaryFire: true,
  },
  meleeAction: defaultMeleeAction(),
  thirdAction: {
    name: 'Corrida Godín',
    description: 'Aumenta la velocidad en un 60% durante 4 segundos.',
    type: ActionType.MOVEMENT,
    damage: 0,
    cooldown: 10.0,
    duration: 4,
    speedModifier: 1.6,
    sound: 'click.ogg',
  },
  voiceLines: {
    spawn: 'godinez_ready.ogg',
    death: 'godinez_down.ogg',
  },
  modelPath: '/models/heros/godin.glb',
  thumbnailPath: '/heros/thumbnails/godinez.webp',
  renderMode: 'adventurer',
  animations: ADVENTURER_RANGED_2H_ANIMATIONS,
  weapon: {
    modelPath: '/models/weapons/AR2.glb',
    scale: 1,
    position: [0.4, -0.3, -0.6],
    rotation: [0, Math.PI / 2, 0],
    barrelPosition: [0, 0.05, -0.3],
  },
  thirdPersonWeapon: thirdPersonAssaultRifle({ rotation: [0, 0, 0.05] }),
};
