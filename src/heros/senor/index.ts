import { Hero } from '../types.ts';
import { HeroCategory } from '../../enums/HeroCategory.ts';
import { ActionType } from '../../enums/ActionType.ts';
import {
  ADVENTURER_RANGED_2H_ANIMATIONS,
  defaultMeleeAction,
  thirdPersonHandWeapon,
} from '../defaults.ts';

export const SENOR_HERO: Hero = {
  id: 'senor',
  name: 'Don Pancho',
  race: 'Señor',
  category: HeroCategory.DPS,
  description: 'Escopeta de corto alcance. Dispara lento pero duele mucho.',
  stats: {
    maxHealth: 150,
    moveSpeed: 10.0,
    hitboxSize: 0.8,
  },
  primaryAction: {
    name: 'Escopeta',
    type: ActionType.RAYCAST,
    damage: 50,
    cooldown: 1.5,
    maxDistance: 100,
    sound: 'revolver.ogg',
    color: '#ffff00',
    rayWidth: 0.5,
    bulletMarkSize: 1.2,
  },
  secondaryAction: {
    name: 'Pedo de señor con propulsión',
    type: ActionType.MOVEMENT,
    damage: 0,
    cooldown: 5.0,
    sound: 'fart.wav',
    impulse: [0, 20, 0],
    allowPrimaryFire: true,
  },
  meleeAction: defaultMeleeAction(),
  voiceLines: {
    spawn: 'senor_ready.ogg',
    death: 'senor_down.ogg',
  },
  modelPath: '/models/heros/Senor.glb',
  thumbnailPath: '/heros/senor.png',
  renderMode: 'adventurer',
  animations: ADVENTURER_RANGED_2H_ANIMATIONS,
  weapon: {
    // modelPath: '/models/adventurers/Assets/gltf/shotgun.gltf',
    modelPath: '/models/weapons/Shotgun.glb',
    scale: 1.0,
    position: [0.35, -0.35, -0.7],
    rotation: [6.501, 1.621, 0.05],
    barrelPosition: [0, 0.08, 1.5],
  },
  thirdPersonWeapon: thirdPersonHandWeapon('/models/weapons/Shotgun.glb', {
    // modelPath: '/models/adventurers/Assets/gltf/shotgun.gltf',
    // modelPath: '/models/adventurers/Assets/gltf/shotgun.gltf',
    scale: 1.0,
  }),
};
