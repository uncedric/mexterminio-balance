import { VehicleType } from '../enums/VehicleType.ts';

export interface BaseMapObject {
  /** Unique within a map, e.g. "classic_hp_0". */
  id: string;
  position: [number, number, number];
  /**
   * Per-instance sound override. If omitted, MAP_OBJECT_SOUNDS[type] is used.
   * Filename only, e.g. 'cash.ogg'.
   */
  sound?: string;
}

export interface HealthPackObject extends BaseMapObject {
  type: 'healthpack';
}

export interface JumpPlatformObject extends BaseMapObject {
  type: 'jump_platform';
  /** Optional vertical velocity override. Falls back to MAP_OBJECT_CONSTANTS.JUMP_PLATFORM_IMPULSE_Y. */
  jumpImpulseY?: number;
}

export interface CoinObject extends BaseMapObject {
  type: 'coin';
}

export interface PalmObject extends BaseMapObject {
  type: 'palm';
}

export interface TreeObject extends BaseMapObject {
  type: 'tree';
}

export interface DeathTreeObject extends BaseMapObject {
  type: 'death_tree';
}

export interface VehicleObject extends BaseMapObject {
  type: 'vehicle';
  vehicleType: VehicleType;
  passengerCapacity?: number;
  uncontrollable?: boolean;
}

export interface BeaconObject extends BaseMapObject {
  type: 'beacon';
  /** Display name of the capture area. */
  name: string;
  /** Circular capture radius in meters. */
  captureRadius: number;
  /** Seconds for 1 player to capture. */
  baseCaptureTime: number;
  /** Optional GLB model to render at the center of the beacon. */
  glb?: string;
  /** Vertical offset from the ground-snapped position. */
  groundOffset?: number;
}

export interface EnemyZoneObject extends BaseMapObject {
  type: 'enemy_zone';
  enemyType: 'skeleton';
  name: string;
  radius: number;
  spawnOffset?: [number, number, number];
  respawnMs?: number;
  /** Maximum skeletons that can spawn based on player level (default: 5). */
  maxSkeletons?: number;
  /** Optional GLB model rendered at the zone center (e.g. cemetery). */
  glb?: string;
  scale?: number;
  rotation?: [number, number, number];
  groundOffset?: number;
}

export interface NoPvpZoneObject extends BaseMapObject {
  type: 'no_pvp_zone';
  name: string;
  radius: number;
  /** Optional passive healing per second for active players inside the zone. */
  healPerSecond?: number;
  glb?: string;
  scale?: number;
  rotation?: [number, number, number];
  groundOffset?: number;
  /** Optional height offset for the 3D HTML name label. */
  labelHeight?: number;
}

export interface CustomPlaceObject extends BaseMapObject {
  type: 'custom_place';
  placeId: string;
  rotation?: [number, number, number];
}

export interface MarketPlaceObject extends BaseMapObject {
  type: 'marketplace';
  name: string;
  radius: number;
  /** GLB model for the market structure (reuses Market.glb). */
  glb?: string;
  scale?: number;
  rotation?: [number, number, number];
  groundOffset?: number;
  labelHeight?: number;
}

export interface MysteryBoxObject extends BaseMapObject {
  type: 'box';
}

export interface ForestTreeDetailed4Object extends BaseMapObject {
  type: 'forest_tree_detailed_4';
}

export type MapObjectConfig =
  | HealthPackObject
  | JumpPlatformObject
  | CoinObject
  | PalmObject
  | TreeObject
  | DeathTreeObject
  | VehicleObject
  | BeaconObject
  | EnemyZoneObject
  | NoPvpZoneObject
  | CustomPlaceObject
  | MarketPlaceObject
  | MysteryBoxObject
  | ForestTreeDetailed4Object;
