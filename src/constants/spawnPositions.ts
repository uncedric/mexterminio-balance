

import { GAME_CONSTANTS } from './game.ts';

/**
 * FFA respawn positions per map, mirroring the values in client/maps/x/config.ts.
 * Kept here so the server can pick a position on kill without importing client code.
 */
export const MAP_RESPAWN_POSITIONS: Record<string, [number, number, number][]> = {
  classic: [
    [0, 10, 0],
    [20, 10, 20],
    [-20, 10, 20],
    [20, 10, -20],
    [-20, 10, -20],
  ],
  sandbox: [
    [0, 10, 0],
    [15, 10, 15],
    [-15, 10, 15],
    [15, 10, -15],
    [-15, 10, -15],
  ],
  gasstation: [
    [0, 10, 20],
    [15, 10, 10],
    [-15, 10, 10],
    [0, 10, -10],
  ],
  warehouse: [
    [0, 10, 0],
    [20, 10, 20],
    [-20, 10, 20],
    [-20, 10, -20],
  ],
  friendly: [
    [0, 10, 0],
    [10, 10, 10],
    [-10, 10, 10],
  ],
  desert: [
    [0, 10, 0],
    [20, 10, 20],
    [-20, 10, 20],
    [20, 10, -20],
    [-20, 10, -20],
  ],
  fps: [
    [0, 10, 0],
    [20, 10, 20],
    [-20, 10, 20],
    [20, 10, -20],
    [-20, 10, -20],
  ],
  castle: [
    [0, 10, 0],
    [20, 10, 20],
    [-20, 10, 20],
    [20, 10, -20],
    [-20, 10, -20],
  ],
  imss: [
    [-77.609, 5.0, 4.465],
    [17.624, 19.499, 59.489],
  ],
  openworld: [
    [40.44, 3.385, -10.696],
    [-10.611, 1.866, -37.724],
    [-57.687, 1.863, -10.798],
    [-0.482, -0.501, -1.215],
  ],
  city: [
    [3.873, 9.791, 10.21],
    [-54.784, 10.21, -9.596],
  ],
  metro: [
    [0.284, 0.244, 0.79],
    [0.26, 18.219, 0.582],
  ],
  mexico: [
    [-146.814, 25.391, 153.966],
    [-145.199, 25.391, 38.799],
    [-27, 36.928, 14],
    [-12, 35.059, 39],
    [5.495, 29.791, 141.508],
    [51, 34.564, 41],
    [45, 25.392, 60],
  ],
};

/**
 * Team-specific respawn positions per map, mirroring the values in client/maps/x/config.ts.
 * Only defined for maps that support team modes (classic, sandbox, gasstation).
 * Maps without an entry fall back to MAP_RESPAWN_POSITIONS.
 */
export const MAP_TEAM_SPAWN_POSITIONS: Record<
  string,
  Record<string, [number, number, number][]>
> = {
  classic: {
    A: [
      [20, 10, 20],
      [-20, 10, 20],
      [0, 10, 20],
    ],
    B: [
      [20, 10, -20],
      [-20, 10, -20],
      [0, 10, -20],
    ],
  },
  sandbox: {
    A: [
      [15, 10, 15],
      [-15, 10, 15],
      [0, 10, 15],
    ],
    B: [
      [15, 10, -15],
      [-15, 10, -15],
      [0, 10, -15],
    ],
  },
  gasstation: {
    A: [
      [15, 10, 10],
      [-15, 10, 10],
      [0, 10, 20],
    ],
    B: [
      [15, 10, -10],
      [-15, 10, -10],
      [0, 10, -10],
    ],
  },
  warehouse: {
    A: [
      [-20, 10, 20],
      [-20, 10, -20],
    ],
    B: [
      [20, 10, 20],
      [20, 10, -20],
    ],
  },
  metro: {
    A: [[0.284, 0.244, 0.79]],
    B: [[0.26, 18.219, 0.582]],
  },
  desert: {
    A: [[-49.613, 5.369, 48.613]],
    B: [[49.613, 5.369, 48.613]],
  },
  city: {
    A: [[-54.784, 10.21, -9.596]],
    B: [[3.873, 9.791, 10.21]],
  },
  imss: {
    A: [[-77.609, 5.0, 4.465]],
    B: [[17.624, 19.499, 59.489]],
  },
};

function applySpawnOffset([x, y, z]: [number, number, number]): [number, number, number] {
  const r = GAME_CONSTANTS.RESPAWN_OFFSET_RADIUS;
  const angle = Math.random() * Math.PI * 2;
  const distance = Math.random() * r;
  return [x + Math.cos(angle) * distance, y, z + Math.sin(angle) * distance];
}

export function getSpawnPosition(map: string, teamId?: string | null): [number, number, number] {
  const teamSpawns = teamId ? MAP_TEAM_SPAWN_POSITIONS[map]?.[teamId] : undefined;
  const pool = teamSpawns ?? MAP_RESPAWN_POSITIONS[map] ?? [[0, 10, 0]];
  return applySpawnOffset(pool[0]);
}

export function pickRespawnPosition({
  map,
  teamId,
}: {
  map: string;
  teamId?: string | null;
}): [number, number, number] {
  return getSpawnPosition(map, teamId);
}
