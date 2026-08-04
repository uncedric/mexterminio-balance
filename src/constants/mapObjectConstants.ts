import { VehicleType } from '../enums/VehicleType.ts';
import type {
  MapObjectConfig,
  NoPvpZoneObject,
  MarketPlaceObject,
} from '../maps/mapObjectTypes.ts';
import { BEACONS } from './beaconConstants.ts';
import { MYSTERY_BOX_CONSTANTS } from './mysteryBoxConstants.ts';

export { type MysteryItemType, AVAILABLE_MYSTERY_ITEMS } from './mysteryBoxConstants.ts';

/**
 * Default sound per object type. Components resolve: config.sound ?? MAP_OBJECT_SOUNDS[config.type].
 * Use the per-instance `sound` field on a map object entry to override for a specific object.
 */
export const MAP_OBJECT_SOUNDS: Partial<Record<string, string>> = {
  box: 'scifibox.ogg',
  coin: 'cash.ogg',
  beacon: 'beacon_hum.ogg',
};

export const MAP_OBJECT_CONSTANTS = {
  HEALTH_PACK_HEAL_AMOUNT: 100,
  HEALTH_PACK_COOLDOWN_MS: 15_000,
  HEALTH_PACK_SPIN_SPEED: 1.5,
  /** Client-side sensor radius (Rapier cylinder). */
  HEALTH_PACK_TRIGGER_RADIUS: 1.5,
  /** Server-side validation radius — 2× trigger radius to absorb network lag. */
  HEALTH_PACK_SERVER_VALIDATION_RADIUS: 3.0,

  /** Default vertical velocity applied when stepping on a jump platform.
   *  With GRAVITY = -20: max height ≈ v² / (2 * |g|) = 900 / 40 ≈ 22.5 m */
  JUMP_PLATFORM_IMPULSE_Y: 30,
  JUMP_PLATFORM_TRIGGER_RADIUS: 1,

  COIN_VALUE: 1,
  COOLDOWN_MS: 60_000,
  COIN_COOLDOWN_MS: 60_000,
  COIN_SPIN_SPEED: 2.0,
  COIN_TRIGGER_RADIUS: 1.2,
  COIN_SERVER_VALIDATION_RADIUS: 2.4,

  /** Vehicles */
  VEHICLE_BOARD_RADIUS: 5.0,
  VEHICLE_SERVER_VALIDATION_RADIUS: 7.0,

  ...MYSTERY_BOX_CONSTANTS,
} as const;

/**
 * Map objects by map id.
 * Uses Record<string, …> (not MapId) so the server can import this without
 * pulling in client code.
 */
const _noPvpZoneCache = new Map<string, NoPvpZoneObject[]>();
const _safeZoneCache = new Map<string, (NoPvpZoneObject | MarketPlaceObject)[]>();

export function getNoPvpZones(mapId: string | null): NoPvpZoneObject[] {
  if (!mapId) {
    return [];
  }
  let cached = _noPvpZoneCache.get(mapId);
  if (!cached) {
    cached = (MAP_OBJECTS[mapId] ?? []).filter(
      (obj): obj is NoPvpZoneObject => obj.type === 'no_pvp_zone',
    );
    _noPvpZoneCache.set(mapId, cached);
  }
  return cached;
}

/** Returns all zones that block PvP (no_pvp_zone + marketplace). */
export function getSafeZones(mapId: string | null): (NoPvpZoneObject | MarketPlaceObject)[] {
  if (!mapId) {
    return [];
  }
  let cached = _safeZoneCache.get(mapId);
  if (!cached) {
    cached = (MAP_OBJECTS[mapId] ?? []).filter(
      (obj): obj is NoPvpZoneObject | MarketPlaceObject =>
        obj.type === 'no_pvp_zone' || obj.type === 'marketplace',
    );
    _safeZoneCache.set(mapId, cached);
  }
  return cached;
}

export const MAP_OBJECTS: Partial<Record<string, MapObjectConfig[]>> = {
  sandbox: [
    { id: 'sandbox_hp_0', type: 'healthpack', position: [8, 0, 0] },
    { id: 'sandbox_jp_0', type: 'jump_platform', position: [-8, 0, 0] },
    { id: 'sandbox_coin_0', type: 'coin', position: [0, 0, 6] },
    { id: 'sandbox_coin_1', type: 'coin', position: [0, 0, -6] },
  ],
  fps: [
    { id: 'fps_jp_0', type: 'jump_platform', position: [1.589, -0.001, 7.905] },
    { id: 'fps_hp_0', type: 'healthpack', position: [-9.334, 8.545, -10.858] },
    { id: 'fps_coin_0', type: 'coin', position: [3.0, 0.0, 3.0] },
    { id: 'fps_coin_1', type: 'coin', position: [-3.0, 0.0, -3.0] },
  ],
  city: [
    { id: 'city_box_0', type: 'box', position: [59.756, 3.376, 19.905] },
    { id: 'city_hp_0', type: 'healthpack', position: [-0.148, -0.501, 0.466] },
  ],
  imss: [{ id: 'imss_box_0', type: 'box', position: [41.308, 1.398, 19.909] }],
  metro: [
    { id: 'metro_jp_0', type: 'jump_platform', position: [-25.36, 1.229, 7.468] },
    { id: 'metro_jp_1', type: 'jump_platform', position: [-9.186, 9.564, 8.257] },
  ],
  mexico: [
    ...(BEACONS.mexico ?? []),
    // South - Palms
    { id: 'mexico_palm_5', type: 'palm', position: [243.889, 14.326, 48.088] },
    { id: 'mexico_palm_8', type: 'palm', position: [286.632, 14.326, 89.478] },
    { id: 'mexico_palm_9', type: 'palm', position: [297.632, 14.326, 89.478] },
    { id: 'mexico_palm_10', type: 'palm', position: [281.132, 14.326, 99.004] },
    { id: 'mexico_palm_12', type: 'palm', position: [302.998, 14.326, 143.923] },
    { id: 'mexico_palm_14', type: 'palm', position: [169.112, 14.848, 123.738] },
    { id: 'mexico_palm_15', type: 'palm', position: [164.391, 15.186, 134.722] },
    { id: 'mexico_palm_16', type: 'palm', position: [168.642, 14.326, 140.49] },
    { id: 'mexico_palm_17', type: 'palm', position: [167.797, 14.326, 147.784] },
    { id: 'mexico_palm_18', type: 'palm', position: [171.997, 14.527, 159.278] },
    { id: 'mexico_palm_19', type: 'palm', position: [110.301, 14.326, 206.244] },
    { id: 'mexico_palm_20', type: 'palm', position: [103.344, 14.326, 192.325] },
    { id: 'mexico_palm_21', type: 'palm', position: [93.844, 14.726, 182.482] },
    { id: 'mexico_palm_22', type: 'palm', position: [77.495, 14.616, 179.832] },
    { id: 'mexico_palm_23', type: 'palm', position: [159.249, 14.326, 205.43] },
    { id: 'mexico_palm_24', type: 'palm', position: [147.978, 14.326, 209.874] },
    { id: 'mexico_palm_25', type: 'palm', position: [155.405, 16.339, 188.162] },
    { id: 'mexico_palm_26', type: 'palm', position: [150.054, 16.176, 177.716] },
    { id: 'mexico_palm_27', type: 'palm', position: [130.255, 15.623, 184.047] },
    { id: 'mexico_palm_28', type: 'palm', position: [337.456, 25.289, 40.693] },
    { id: 'mexico_palm_29', type: 'palm', position: [335.19, 25.289, 64.009] },
    { id: 'mexico_palm_30', type: 'palm', position: [335.699, 25.289, 59.259] },
    { id: 'mexico_palm_31', type: 'palm', position: [335.864, 25.289, 35.52] },
    // Cluster 1 (x: 241.732, z: 101.821)
    { id: 'mexico_palm_32', type: 'palm', position: [241.732, 14.326, 104.701] },
    { id: 'mexico_palm_33', type: 'palm', position: [239.232, 14.326, 100.381] },
    { id: 'mexico_palm_34', type: 'palm', position: [244.232, 14.326, 100.381] },
    // Cluster 2 (x: 247.906, z: 106.927)
    { id: 'mexico_palm_35', type: 'palm', position: [245.406, 14.326, 109.427] },
    { id: 'mexico_palm_36', type: 'palm', position: [250.406, 14.326, 109.427] },
    { id: 'mexico_palm_37', type: 'palm', position: [250.406, 14.326, 104.427] },
    { id: 'mexico_palm_38', type: 'palm', position: [245.406, 14.326, 104.427] },
    // Cluster 3 (x: 257.218, z: 113.966)
    { id: 'mexico_palm_39', type: 'palm', position: [257.218, 14.326, 116.846] },
    { id: 'mexico_palm_40', type: 'palm', position: [254.718, 14.326, 112.526] },
    { id: 'mexico_palm_41', type: 'palm', position: [259.718, 14.326, 112.526] },
    // Cluster 4 (x: 252.294, z: 151.473)
    { id: 'mexico_palm_42', type: 'palm', position: [249.794, 14.326, 153.973] },
    { id: 'mexico_palm_43', type: 'palm', position: [254.794, 14.326, 153.973] },
    { id: 'mexico_palm_44', type: 'palm', position: [254.794, 14.326, 148.973] },
    { id: 'mexico_palm_45', type: 'palm', position: [249.794, 14.326, 148.973] },
    // Cluster 5 (x: 242.042, z: 157.614)
    { id: 'mexico_palm_46', type: 'palm', position: [242.042, 14.326, 160.494] },
    { id: 'mexico_palm_47', type: 'palm', position: [239.542, 14.326, 156.174] },
    { id: 'mexico_palm_48', type: 'palm', position: [244.542, 14.326, 156.174] },
    // Cluster 6 (x: 224.481, z: 163.028)
    { id: 'mexico_palm_49', type: 'palm', position: [221.981, 14.326, 165.528] },
    { id: 'mexico_palm_50', type: 'palm', position: [226.981, 14.326, 165.528] },
    { id: 'mexico_palm_51', type: 'palm', position: [226.981, 14.326, 160.528] },
    { id: 'mexico_palm_52', type: 'palm', position: [221.981, 14.326, 160.528] },
    // Cluster 7 (x: 226.757, z: 131.127)
    { id: 'mexico_palm_53', type: 'palm', position: [226.757, 16.437, 134.007] },
    { id: 'mexico_palm_54', type: 'palm', position: [224.257, 15.875, 129.687] },
    { id: 'mexico_palm_55', type: 'palm', position: [229.257, 16.214, 129.687] },
    // Cluster 8 (x: 235.637, z: 137.264)
    { id: 'mexico_palm_56', type: 'palm', position: [233.137, 15.068, 139.764] },
    { id: 'mexico_palm_57', type: 'palm', position: [238.137, 14.45, 139.764] },
    { id: 'mexico_palm_58', type: 'palm', position: [238.137, 14.982, 134.764] },
    { id: 'mexico_palm_59', type: 'palm', position: [233.137, 15.599, 134.764] },
    // Cluster 9 (x: 249.594, z: 130.958)
    { id: 'mexico_palm_60', type: 'palm', position: [249.594, 14.326, 133.838] },
    { id: 'mexico_palm_61', type: 'palm', position: [247.094, 14.326, 129.518] },
    { id: 'mexico_palm_62', type: 'palm', position: [252.094, 14.326, 129.518] },
    // Cluster 10 (x: 262.349, z: 131.862)
    { id: 'mexico_palm_63', type: 'palm', position: [259.849, 14.326, 134.362] },
    { id: 'mexico_palm_64', type: 'palm', position: [264.849, 14.612, 134.362] },
    { id: 'mexico_palm_65', type: 'palm', position: [264.849, 14.326, 129.362] },
    { id: 'mexico_palm_66', type: 'palm', position: [259.849, 14.326, 129.362] },
    // Cluster 11 (x: 266.121, z: 121.275)
    { id: 'mexico_palm_67', type: 'palm', position: [266.121, 14.326, 124.155] },
    { id: 'mexico_palm_68', type: 'palm', position: [263.621, 14.326, 119.835] },
    { id: 'mexico_palm_69', type: 'palm', position: [268.621, 14.326, 119.835] },
    // Cluster 12 (x: 266.829, z: 111.454)
    { id: 'mexico_palm_70', type: 'palm', position: [264.329, 14.326, 113.954] },
    { id: 'mexico_palm_71', type: 'palm', position: [269.329, 14.326, 113.954] },
    { id: 'mexico_palm_72', type: 'palm', position: [269.329, 14.326, 108.954] },
    { id: 'mexico_palm_73', type: 'palm', position: [264.329, 14.326, 108.954] },
    // Cluster 13 (x: 256.442, z: 93.175)
    { id: 'mexico_palm_74', type: 'palm', position: [256.442, 14.326, 96.055] },
    { id: 'mexico_palm_75', type: 'palm', position: [253.942, 14.326, 91.735] },
    { id: 'mexico_palm_76', type: 'palm', position: [258.942, 14.326, 91.735] },
    // Cluster 14 (x: 253.832, z: 73.753)
    { id: 'mexico_palm_77', type: 'palm', position: [251.332, 15.131, 76.253] },
    { id: 'mexico_palm_78', type: 'palm', position: [256.332, 14.506, 76.253] },
    { id: 'mexico_palm_79', type: 'palm', position: [256.332, 15.045, 71.253] },
    { id: 'mexico_palm_80', type: 'palm', position: [251.332, 15.67, 71.253] },
    // Cluster 15 (x: 233.877, z: 72.970)
    { id: 'mexico_palm_81', type: 'palm', position: [233.877, 15.186, 75.85] },
    { id: 'mexico_palm_82', type: 'palm', position: [231.377, 14.873, 71.53] },
    { id: 'mexico_palm_83', type: 'palm', position: [236.377, 15.499, 71.53] },
    // Cluster 16 (x: 185.690, z: 96.522)
    { id: 'mexico_palm_84', type: 'palm', position: [183.19, 14.326, 99.022] },
    { id: 'mexico_palm_85', type: 'palm', position: [188.19, 14.326, 99.022] },
    { id: 'mexico_palm_86', type: 'palm', position: [188.19, 14.326, 94.022] },
    { id: 'mexico_palm_87', type: 'palm', position: [183.19, 14.326, 94.022] },
    // Cluster 17 (x: 166.063, z: 104.181)
    { id: 'mexico_palm_88', type: 'palm', position: [166.063, 14.326, 107.061] },
    { id: 'mexico_palm_89', type: 'palm', position: [163.563, 14.326, 102.741] },
    { id: 'mexico_palm_90', type: 'palm', position: [168.563, 14.326, 102.741] },
    // Central - Trees
    { id: 'mexico_tree_2', type: 'tree', position: [45, 34.564, 15] },
    { id: 'mexico_tree_4', type: 'tree', position: [50, 34.564, -3] },
    { id: 'mexico_tree_5', type: 'tree', position: [-22.699, 25.932, 151.666] },
    { id: 'mexico_tree_6', type: 'tree', position: [-35.202, 25.392, 183.322] },
    { id: 'mexico_tree_7', type: 'tree', position: [-57.314, 25.392, 57.463] },
    { id: 'mexico_tree_8', type: 'tree', position: [-62.445, 25.392, 63.032] },
    { id: 'mexico_tree_9', type: 'tree', position: [-53.535, 26.124, 92.356] },
    // North - Death Trees
    { id: 'mexico_death_tree_0', type: 'death_tree', position: [-40, 37.605, -70] },
    { id: 'mexico_death_tree_1', type: 'death_tree', position: [35, 34.564, -85] },
    { id: 'mexico_death_tree_2', type: 'death_tree', position: [-90, 38.075, -55] },
    { id: 'mexico_death_tree_3', type: 'death_tree', position: [10, 37.422, -90] },
    { id: 'mexico_death_tree_4', type: 'death_tree', position: [50, 34.564, -43] },
    // Forest Tree Detailed 4
    { id: 'mexico_ftd4_1', type: 'forest_tree_detailed_4', position: [-114.878, 27.146, 162.255] },
    { id: 'mexico_ftd4_2', type: 'forest_tree_detailed_4', position: [-211.744, 24.391, 176.08] },
    { id: 'mexico_ftd4_3', type: 'forest_tree_detailed_4', position: [-140.98, 25.201, 30.578] },
    { id: 'mexico_ftd4_4', type: 'forest_tree_detailed_4', position: [-205.921, 24.391, 33.134] },
    // Vehicles
    {
      id: 'mexico_car_0',
      type: 'vehicle',
      vehicleType: VehicleType.CAR,
      position: [-71.609, 35.358, -56.467],
    },
    {
      id: 'mexico_pickup_truck_0',
      type: 'vehicle',
      vehicleType: VehicleType.PICKUP_TRUCK,
      position: [-41.732, 34.563, -129.484],
    },
    {
      id: 'mexico_taxi_0',
      type: 'vehicle',
      vehicleType: VehicleType.TAXI,
      position: [-75.702, 25.392, 111.161],
    },
    {
      id: 'mexico_pesero_0',
      type: 'vehicle',
      vehicleType: VehicleType.PESERO,
      position: [-19.255, 25.611, 149.996],
      passengerCapacity: 20,
    },
    {
      id: 'mexico_boat_0',
      type: 'vehicle',
      vehicleType: VehicleType.BOAT,
      position: [54.162, 0, -71.606],
      uncontrollable: true,
    },
    { id: 'mexico_hp_0', type: 'healthpack', position: [-315.809, 34.563, -224.899] },
    {
      id: 'mexico_tacos_no_pvp_zone',
      type: 'no_pvp_zone',
      name: 'Zona de Tacos',
      position: [-315.823, 34.563, -228.309],
      radius: 8,
      healPerSecond: 10,
      glb: '/models/objects/Tacos.glb',
      scale: 1,
      rotation: [0, 0, 0],
      labelHeight: 5.5,
    },
    {
      id: 'mexico_tacos_no_pvp_zone_2',
      type: 'no_pvp_zone',
      name: 'Zona de Tacos',
      position: [-149.36, 25.392, 39.995],
      radius: 8,
      healPerSecond: 10,
      glb: '/models/objects/Tacos.glb',
      scale: 1,
      rotation: [0, 0, 0],
      labelHeight: 5.5,
    },
    {
      id: 'mexico_tacos_no_pvp_zone_3',
      type: 'no_pvp_zone',
      name: 'Zona de Tacos',
      position: [159.019, 14.326, 202.875],
      radius: 8,
      healPerSecond: 10,
      glb: '/models/objects/Tacos.glb',
      scale: 1,
      rotation: [0, 0, 0],
      labelHeight: 5.5,
    },
    {
      id: 'mexico_marketplace_0',
      type: 'marketplace',
      name: 'Mercado',
      position: [-143.64, 25.391, 153.128],
      radius: 12,
      scale: 1,
      glb: '/models/objects/Market.glb',
      rotation: [0, 0, 0],
      labelHeight: 10,
    },
    { id: 'mexico_hp_1', type: 'healthpack', position: [42.118, 25.392, 67.439] },
    { id: 'mexico_hp_2', type: 'healthpack', position: [-158.415, 25.392, 152.428] },
    { id: 'mexico_hp_3', type: 'healthpack', position: [-65.123, 14.326, 204.659] },
    { id: 'mexico_jp_0', type: 'jump_platform', position: [-86.1, 25.392, 11.589] },
    {
      id: 'mexico_jp_1',
      type: 'jump_platform',
      position: [-211.237, 25.392, 13.985],
      jumpImpulseY: 100,
    },
    { id: 'mexico_jp_2', type: 'jump_platform', position: [-16.219, 15.921, 189.266] },
    { id: 'mexico_jp_3', type: 'jump_platform', position: [55.693, 14.326, 115.245] },
    { id: 'mexico_jp_4', type: 'jump_platform', position: [314.195, 14.326, 49.371] },
    { id: 'mexico_jp_5', type: 'jump_platform', position: [331.735, 25.289, 54.891] },
    { id: 'mexico_jp_6', type: 'jump_platform', position: [5.698, 29.358, 53.89] },
    {
      id: 'mexico_skeleton_zone_tulum',
      type: 'enemy_zone',
      enemyType: 'skeleton',
      name: 'Guardián de Tulum',
      position: [290.43, 14.326, 148.075],
      radius: 28,
      spawnOffset: [0, 0, 5],
      respawnMs: 60_000,
      maxSkeletons: 6,
      glb: '/models/objects/Cemetery.glb',
    },
    {
      id: 'mexico_skeleton_zone_north_path',
      type: 'enemy_zone',
      enemyType: 'skeleton',
      name: 'Guardián del Norte',
      position: [9.121, 34.563, -148.277],
      radius: 28,
      spawnOffset: [0, 0, 5],
      respawnMs: 60_000,
      maxSkeletons: 6,
      glb: '/models/objects/Cemetery.glb',
    },
    { id: 'mexico_box_0', type: 'box', position: [0, 34.969, 20] },
    { id: 'mexico_box_1', type: 'box', position: [82.621, 14.724, 148.397] },
    { id: 'mexico_box_2', type: 'box', position: [42, 25.525, 80] },
    { id: 'mexico_box_3', type: 'box', position: [159, 14.902, 160] },
    { id: 'mexico_box_4', type: 'box', position: [-202.441, 25.392, 95.099] },
    { id: 'mexico_box_5', type: 'box', position: [204.293, 14.326, 47.945] },
    { id: 'mexico_box_6', type: 'box', position: [-315.333, 34.475, -6.312] },
  ],
};
