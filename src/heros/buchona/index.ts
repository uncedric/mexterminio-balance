import { Hero } from '../types.ts';
import { HeroCategory } from '../../enums/HeroCategory.ts';
import { AdventurerAnimation } from '../../enums/AdventurerAnimation.ts';
import { ActionType } from '../../enums/ActionType.ts';

export const BUCHONA_HERO: Hero = {
  id: 'buchona',
  name: 'Kimberly',
  race: 'Buchona',
  category: HeroCategory.DPS,
  description:
    'Barbie "buchona" que cambió el castillo por una Cheyenne y el té por una botella de Moët.',
  stats: {
    maxHealth: 110,
    moveSpeed: 11.0,
    hitboxSize: 0.8,
  },
  primaryAction: {
    name: 'Escuadra',
    type: ActionType.RAYCAST,
    damage: 20,
    cooldown: 0.5,
    maxDistance: 15,
    burstCount: 5,
    burstInterval: 1,
    sound: 'kiss.ogg',
  },
  secondaryAction: {
    name: 'Regalito',
    type: ActionType.TARGETED,
    damage: -40, // Negative = Heal
    cooldown: 8.0,
    maxDistance: 12,
    sound: 'kiss.ogg',
    targeting: {
      type: 'ALLY',
      range: 12,
    },
  },
  meleeAction: {
    name: 'Melee',
    type: ActionType.MELEE,
    damage: 30,
    cooldown: 0.8,
    maxDistance: 3,
    sound: 'slap.ogg',
  },
  voiceLines: {
    spawn: 'buchona_ready.ogg',
    death: 'buchona_down.ogg',
  },
  modelPath: '/models/heros/buchona.glb',
  thumbnailPath: '/heros/buchona.png',
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
  weapon: {
    modelPath: '/models/weapons/BuchonaGun.glb',
    scale: 0.2,
    position: [0.3, -0.2, -0.4],
    rotation: [0, Math.PI, 0],
    barrelPosition: [0, 0.03, -0.3],
  },
  secondaryWeapon: {
    modelPath: '/models/weapons/Ak47.glb',
    scale: 0.5,
    position: [0.35, -0.3, -0.6],
    rotation: [0, Math.PI, 0],
  },
  thirdPersonWeapon: {
    modelPath: '/models/weapons/BuchonaGun.glb',
    scale: 0.1,
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    bone: 'handslotr',
  },
  thirdPersonSecondaryWeapon: {
    modelPath: '/models/weapons/Ak47.glb',
    scale: 0.2,
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    bone: 'handslotr',
  },
};
