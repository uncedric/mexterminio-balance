import { Hero } from '../types.ts';
import { HeroCategory } from '../../enums/HeroCategory.ts';
import { ActionType } from '../../enums/ActionType.ts';
import {
  ADVENTURER_RANGED_1H_ANIMATIONS,
  defaultMeleeAction,
  thirdPersonHandWeapon,
} from '../defaults.ts';

const NOMADA_SHIELD_HEALTH = 400;
const NOMADA_SHIELD_DURATION = 5;
const NOMADA_SHIELD_SPEED_MODIFIER = 0.5;
const NOMADA_SHIELD_COOLDOWN = 12;

export const NOMADA_DIGITAL_HERO: Hero = {
  id: 'nomada',
  name: 'Nómada Digital',
  race: 'Nómada Digital',
  category: HeroCategory.TANK,
  description:
    'Viaja por el mundo con una laptop y una VPN. Su oficina es cualquier café con WiFi, y su defensa es que vive en una burbuja gentrificada.',
  stats: {
    maxHealth: 250,
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
    name: 'Vivir en una Burbuja',
    type: ActionType.MOVEMENT,
    damage: 0,
    cooldown: NOMADA_SHIELD_COOLDOWN,
    duration: NOMADA_SHIELD_DURATION,
    speedModifier: NOMADA_SHIELD_SPEED_MODIFIER,
    shieldHealth: NOMADA_SHIELD_HEALTH,
    damageReduction: 0,
    allowPrimaryFire: true,
  },
  meleeAction: defaultMeleeAction(),
  voiceLines: {
    spawn: 'senor_ready.ogg',
    death: 'godinez_down.ogg',
  },
  modelPath: '/models/heros/nomada.glb',
  renderMode: 'adventurer',
  animations: ADVENTURER_RANGED_1H_ANIMATIONS,
  weapon: {
    modelPath: '/models/weapons/Pistol1H.glb',
    scale: 1,
    position: [0.4, -0.3, -0.6],
    rotation: [1.6, 1.571, 0],
    barrelPosition: [0, 0.05, -0.3],
  },
  thirdPersonWeapon: thirdPersonHandWeapon('/models/weapons/Pistol1H.glb', { scale: 1.0 }),
};
