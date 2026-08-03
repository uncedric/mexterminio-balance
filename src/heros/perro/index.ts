import { Hero } from '../types.ts';
import { HeroCategory } from '../../enums/HeroCategory.ts';
import { ActionType } from '../../enums/ActionType.ts';
import { defaultMeleeAction } from '../defaults.ts';

const PERRO_AOE_HEAL_AMOUNT = -60;
const PERRO_AOE_HEAL_RADIUS = 10;
const PERRO_AOE_HEAL_COOLDOWN = 10;

const PERRO_LADRIDO_DAMAGE = 50;
const PERRO_LADRIDO_RADIUS = 8;
const PERRO_LADRIDO_COOLDOWN = 0.5;
const PERRO_LADRIDO_COLOR = '#ef4444';

export enum PerroAnimation {
  ATTACK = 'Attack',
  DEATH = 'Death',
  EATING = 'Eating',
  GALLOP = 'Gallop',
  GALLOP_JUMP = 'Gallop_Jump',
  IDLE_HIT_REACT_LEFT = 'Idle_HitReact_Left',
  IDLE_HIT_REACT_RIGHT = 'Idle_HitReact_Right',
  JUMP_TO_IDLE = 'Jump_ToIdle',
  WALK = 'Walk',
  IDLE_HEAD_LOW = 'Idle_2_HeadLow',
  IDLE_ALT = 'Idle_2',
  IDLE = 'Idle',
}

export const PERRO_HERO: Hero = {
  id: 'perro',
  name: 'Perro',
  race: 'Perro',
  category: HeroCategory.HEALER,
  description: 'Fiel y leal, siempre al lado de los suyos. Su ladrido distrae; su presencia, cura.',
  stats: {
    maxHealth: 120,
    moveSpeed: 11.0,
    hitboxSize: 0.8,
  },
  primaryAction: {
    name: 'Ladrido Castrante',
    type: ActionType.AOE,
    damage: PERRO_LADRIDO_DAMAGE,
    cooldown: PERRO_LADRIDO_COOLDOWN,
    maxDistance: PERRO_LADRIDO_RADIUS,
    sound: 'bark.ogg',
    color: PERRO_LADRIDO_COLOR,
  },
  secondaryAction: {
    name: 'Aullido Sanador',
    type: ActionType.AOE_HEAL,
    damage: PERRO_AOE_HEAL_AMOUNT,
    cooldown: PERRO_AOE_HEAL_COOLDOWN,
    maxDistance: PERRO_AOE_HEAL_RADIUS,
  },
  meleeAction: defaultMeleeAction(),
  voiceLines: {
    spawn: 'whitexican_ready.ogg',
    death: 'whitexican_down.ogg',
  },
  // weapon: {
  //   modelPath: '/models/weapons/Pistol.glb',
  //   scale: 1,
  //   position: [0.4, -0.3, -0.6],
  //   rotation: [0, Math.PI / 2, 0],
  //   barrelPosition: [0, 0.05, -0.3],
  // },
  modelPath: '/models/heros/perro.glb',
  thumbnailPath: '/heros/perro.png',
  renderMode: 'standalone',
  animations: {
    idle: PerroAnimation.IDLE,
    walk: PerroAnimation.WALK,
    run: PerroAnimation.GALLOP,
    jump: PerroAnimation.GALLOP_JUMP,
    jumpIdle: PerroAnimation.GALLOP_JUMP,
    shoot: PerroAnimation.ATTACK,
    death: PerroAnimation.DEATH,
    hitReact: PerroAnimation.IDLE_HIT_REACT_LEFT,
  },
};
