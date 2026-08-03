/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Waypoint {
  id: string;
  position: [number, number, number];
  neighbors: string[];
}

export const MAP_WAYPOINTS: Record<string, Waypoint[]> = {
  classic: [
    { id: 'c0', position: [0, 10, 0], neighbors: ['c1', 'c2', 'c3', 'c4'] },
    { id: 'c1', position: [20, 10, 20], neighbors: ['c0', 'c2', 'c3'] },
    { id: 'c2', position: [-20, 10, 20], neighbors: ['c0', 'c1', 'c4'] },
    { id: 'c3', position: [20, 10, -20], neighbors: ['c0', 'c1', 'c4'] },
    { id: 'c4', position: [-20, 10, -20], neighbors: ['c0', 'c2', 'c3'] },
  ],
  sandbox: [
    { id: 's0', position: [0, 10, 0], neighbors: ['s1', 's2', 's3', 's4'] },
    { id: 's1', position: [15, 10, 15], neighbors: ['s0', 's2', 's3'] },
    { id: 's2', position: [-15, 10, 15], neighbors: ['s0', 's1', 's4'] },
    { id: 's3', position: [15, 10, -15], neighbors: ['s0', 's1', 's4'] },
    { id: 's4', position: [-15, 10, -15], neighbors: ['s0', 's2', 's3'] },
  ],
  gasstation: [
    { id: 'g0', position: [0, 10, 20], neighbors: ['g1', 'g2', 'g3'] },
    { id: 'g1', position: [15, 10, 10], neighbors: ['g0', 'g3'] },
    { id: 'g2', position: [-15, 10, 10], neighbors: ['g0', 'g3'] },
    { id: 'g3', position: [0, 10, -10], neighbors: ['g0', 'g1', 'g2'] },
  ],
  mexico: [
    // North Zone (Desert) spawn positions and landmarks
    {
      id: 'm_spawn_0',
      position: [-75, 35, -35],
      neighbors: ['m_spawn_1', 'm_spawn_2', 'm_beacon_north'],
    },
    {
      id: 'm_spawn_1',
      position: [-21, 35, -35],
      neighbors: ['m_spawn_0', 'm_spawn_3', 'm_beacon_north'],
    },
    { id: 'm_spawn_2', position: [-92, 35, -65], neighbors: ['m_spawn_0', 'm_beacon_paquime'] },
    {
      id: 'm_beacon_north',
      position: [-10.392, 45.154, -60.285],
      neighbors: ['m_spawn_0', 'm_spawn_1', 'm_guardian_north_path'],
    },
    {
      id: 'm_guardian_north_path',
      position: [9.121, 34.563, -148.277],
      neighbors: ['m_beacon_north', 'm_spawn_1'],
    },
    {
      id: 'm_beacon_paquime',
      position: [-128.046, 34.564, -190.075],
      neighbors: ['m_spawn_2', 'm_beacon_las_labradas'],
    },
    {
      id: 'm_beacon_las_labradas',
      position: [-269.838, 34.564, -65.822],
      neighbors: ['m_beacon_paquime', 'm_beacon_la_quemada'],
    },
    {
      id: 'm_beacon_la_quemada',
      position: [-101.062, 34.563, -2.2],
      neighbors: ['m_beacon_las_labradas', 'm_spawn_0', 'm_spawn_3'],
    },

    // Center Zone (Grasslands) spawn positions and landmarks
    {
      id: 'm_spawn_3',
      position: [-27, 25, 14],
      neighbors: ['m_spawn_1', 'm_spawn_4', 'm_beacon_tenochtitlan', 'm_beacon_la_quemada'],
    },
    {
      id: 'm_spawn_4',
      position: [-12, 25, 39],
      neighbors: ['m_spawn_3', 'm_spawn_5', 'm_beacon_tenochtitlan'],
    },
    {
      id: 'm_beacon_tenochtitlan',
      position: [-33.487, 25.392, 128.298],
      neighbors: ['m_spawn_3', 'm_spawn_4', 'm_beacon_guachimontones', 'm_beacon_la_venta'],
    },
    {
      id: 'm_beacon_guachimontones',
      position: [-158.04, 25.392, 109.189],
      neighbors: ['m_beacon_tenochtitlan', 'm_beacon_baja_california'],
    },
    {
      id: 'm_beacon_baja_california',
      position: [-348.162, 36.927, -10.182],
      neighbors: ['m_beacon_guachimontones'],
    },

    // South Zone (Jungle) spawn positions and landmarks
    {
      id: 'm_spawn_5',
      position: [-92.584, 15, 122.395],
      neighbors: ['m_spawn_4', 'm_spawn_7', 'm_beacon_tenochtitlan'],
    },
    {
      id: 'm_spawn_6',
      position: [170.978, 14.326, 195.891],
      neighbors: ['m_spawn_8', 'm_beacon_monte_alban', 'm_beacon_palenque'],
    },
    {
      id: 'm_spawn_7',
      position: [-93.528, 15, 150.005],
      neighbors: ['m_spawn_5', 'm_spawn_8', 'm_beacon_acapulco'],
    },
    {
      id: 'm_spawn_8',
      position: [-26.187, 15, 207.658],
      neighbors: ['m_spawn_7', 'm_spawn_6', 'm_beacon_acapulco'],
    },
    {
      id: 'm_beacon_la_venta',
      position: [137.468, 14.326, 109.175],
      neighbors: ['m_beacon_tenochtitlan', 'm_beacon_palenque', 'm_beacon_chichen_itza'],
    },
    {
      id: 'm_beacon_palenque',
      position: [183.255, 14.326, 136.145],
      neighbors: ['m_beacon_la_venta', 'm_spawn_6', 'm_guardian_tulum'],
    },
    {
      id: 'm_beacon_monte_alban',
      position: [85.533, 14.326, 197.619],
      neighbors: ['m_spawn_6', 'm_beacon_acapulco'],
    },
    {
      id: 'm_beacon_acapulco',
      position: [11.969, 14.326, 221.821],
      neighbors: ['m_spawn_7', 'm_spawn_8', 'm_beacon_monte_alban'],
    },
    {
      id: 'm_beacon_chichen_itza',
      position: [287.388, 14.326, 63.92],
      neighbors: ['m_beacon_la_venta', 'm_beacon_san_gervasio', 'm_guardian_tulum'],
    },
    {
      id: 'm_beacon_san_gervasio',
      position: [333.549, 25.289, 44.529],
      neighbors: ['m_beacon_chichen_itza'],
    },
    {
      id: 'm_guardian_tulum',
      position: [290.43, 14.326, 148.075],
      neighbors: ['m_beacon_palenque', 'm_beacon_chichen_itza'],
    },
  ],
};

/**
 * Runs A* pathfinding over the waypoint graph of a given map.
 */
export function findWaypointPath(
  mapId: string,
  startPos: [number, number, number] | { x: number; y: number; z: number },
  endPos: [number, number, number] | { x: number; y: number; z: number },
  hasLineOfSight?: (p1: [number, number, number], p2: [number, number, number]) => boolean,
): [number, number, number][] | null {
  const waypoints = MAP_WAYPOINTS[mapId];
  if (!waypoints || waypoints.length === 0) {
    return null;
  }

  // Normalize position inputs to arrays
  const start: [number, number, number] = Array.isArray(startPos)
    ? startPos
    : [startPos.x, startPos.y, startPos.z];
  const end: [number, number, number] = Array.isArray(endPos)
    ? endPos
    : [endPos.x, endPos.y, endPos.z];

  // 3D Distance helper
  const dist = (p1: [number, number, number], p2: [number, number, number]) => {
    const dx = p1[0] - p2[0];
    const dy = p1[1] - p2[1];
    const dz = p1[2] - p2[2];
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
  };

  // Find start waypoint (closest node with line-of-sight to the start pos)
  let startWp: Waypoint | null = null;
  let startMinDist = Infinity;
  for (const wp of waypoints) {
    const d = dist(start, wp.position);
    const hasLos = hasLineOfSight ? hasLineOfSight(start, wp.position) : true;
    if (hasLos && d < startMinDist) {
      startMinDist = d;
      startWp = wp;
    }
  }
  // Fallback to absolute closest node if line-of-sight fails
  if (!startWp) {
    let closestDist = Infinity;
    for (const wp of waypoints) {
      const d = dist(start, wp.position);
      if (d < closestDist) {
        closestDist = d;
        startWp = wp;
      }
    }
  }

  // Find end waypoint (closest node with line-of-sight to the end pos)
  let endWp: Waypoint | null = null;
  let endMinDist = Infinity;
  for (const wp of waypoints) {
    const d = dist(end, wp.position);
    const hasLos = hasLineOfSight ? hasLineOfSight(wp.position, end) : true;
    if (hasLos && d < endMinDist) {
      endMinDist = d;
      endWp = wp;
    }
  }
  // Fallback to absolute closest node
  if (!endWp) {
    let closestDist = Infinity;
    for (const wp of waypoints) {
      const d = dist(end, wp.position);
      if (d < closestDist) {
        closestDist = d;
        endWp = wp;
      }
    }
  }

  if (!startWp || !endWp) {
    return null;
  }
  if (startWp.id === endWp.id) {
    return [startWp.position];
  }

  // A* open list and trackers
  const openSet = new Set<string>([startWp.id]);
  const cameFrom = new Map<string, string>();
  const gScore = new Map<string, number>();
  const fScore = new Map<string, number>();

  waypoints.forEach((wp) => {
    gScore.set(wp.id, Infinity);
    fScore.set(wp.id, Infinity);
  });

  gScore.set(startWp.id, 0);
  fScore.set(startWp.id, dist(startWp.position, endWp.position));

  while (openSet.size > 0) {
    // Find node with lowest fScore
    let currentId = '';
    let minF = Infinity;
    openSet.forEach((id) => {
      const f = fScore.get(id) ?? Infinity;
      if (f < minF) {
        minF = f;
        currentId = id;
      }
    });

    if (currentId === endWp.id) {
      // Reconstruct path
      const path: [number, number, number][] = [];
      let temp = currentId;
      while (cameFrom.has(temp)) {
        const wp = waypoints.find((w) => w.id === temp)!;
        path.push(wp.position);
        temp = cameFrom.get(temp)!;
      }
      path.push(startWp.position);
      return path.reverse();
    }

    openSet.delete(currentId);
    const currentWp = waypoints.find((w) => w.id === currentId)!;

    for (const neighborId of currentWp.neighbors) {
      const neighborWp = waypoints.find((w) => w.id === neighborId);
      if (!neighborWp) {
        continue;
      }

      const tentativeG =
        (gScore.get(currentId) ?? Infinity) + dist(currentWp.position, neighborWp.position);
      if (tentativeG < (gScore.get(neighborId) ?? Infinity)) {
        cameFrom.set(neighborId, currentId);
        gScore.set(neighborId, tentativeG);
        fScore.set(neighborId, tentativeG + dist(neighborWp.position, endWp.position));
        openSet.add(neighborId);
      }
    }
  }

  return null;
}
