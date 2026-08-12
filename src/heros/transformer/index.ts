import { Hero } from '../types.ts';
import { HeroCategory } from '../../enums/HeroCategory.ts';
import { ActionType } from '../../enums/ActionType.ts';
import { AdventurerAnimation } from '../../enums/AdventurerAnimation.ts';
import { defaultMeleeAction, thirdPersonHandWeapon } from '../defaults.ts';

export const TRANSFORMER_HERO: Hero = {
  id: 'transformer',
  name: 'Yatzil',
  race: 'Transformer',
  category: HeroCategory.DPS,
  description: 'Condesa de Tlalpan, Francotiradora de élite. Mujer con rama, Un disparo, una baja.',
  stats: {
    maxHealth: 130,
    moveSpeed: 8.0,
    hitboxSize: 0.7,
  },
  primaryAction: {
    name: 'Rifle de precisión',
    type: ActionType.RAYCAST,
    damage: 70,
    cooldown: 2.5,
    maxDistance: 200,
    color: '#232322',
    sound: 'snipper_gunshot2.ogg',
  },
  secondaryAction: {
    name: 'Visor',
    type: ActionType.SCOPE,
    damage: 0,
    cooldown: 0,
  },
  meleeAction: defaultMeleeAction(),
  thirdAction: {
    name: 'Modo Turbo',
    description: 'Aumenta su velocidad de movimiento durante 4 segundos.',
    type: ActionType.MOVEMENT,
    damage: 0,
    cooldown: 8.0,
    duration: 4,
    speedModifier: 1.7,
    sound: 'click.ogg',
  },
  voiceLines: {
    spawn: 'transformer_ready.ogg',
    death: 'transformer_down.ogg',
  },
  modelPath: '/models/heros/transformer.glb',
  thumbnailPath: '/heros/thumbnails/transformer.webp',
  renderMode: 'adventurer',
  animations: {
    idle: AdventurerAnimation.IDLE_A,
    run: AdventurerAnimation.RUNNING_HOLDING_RIFLE,
    shoot: AdventurerAnimation.RANGED_2H_SHOOT,
    jump: AdventurerAnimation.JUMP_START,
    jumpIdle: AdventurerAnimation.JUMP_IDLE,
    jumpLand: AdventurerAnimation.JUMP_LAND,
    death: AdventurerAnimation.DEATH_A,
    hitReact: AdventurerAnimation.HIT_A,
  },
  weapon: {
    modelPath: '/models/weapons/SnipperRifle.glb',
    scale: 1,
    position: [0.4, -0.3, -0.6],
    rotation: [0.25, 1.671, 0],
    barrelPosition: [0, 0.05, -0.3],
  },
  thirdPersonWeapon: thirdPersonHandWeapon('/models/weapons/SnipperRifle.glb', {
    scale: 1,
    rotation: [4.5, 0, 0.05],
  }),
};
