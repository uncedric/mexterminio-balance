/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Objectives & Badges — single source of truth for the achievement system.
 * Server is authoritative for awarding badges; client reads this for UI display.
 */

export type ObjectiveTrigger =
  | 'beacon_capture'
  | 'coins_collected'
  | 'kills'
  | 'all_beacons_captured';

export interface Objective {
  id: string;
  label: string;
  badgeId: string;
  trigger: ObjectiveTrigger;
  /** Threshold value. 0 for all_beacons_captured (uses special logic). */
  target: number;
}

export interface Badge {
  id: string;
  name: string;
  icon: string;
  xpReward: number;
  description: string;
}

export const OBJECTIVES: Objective[] = [
  { id: 'obj_capture_1', label: 'Captura una ciudad', badgeId: 'b_conq_jr', trigger: 'beacon_capture', target: 1 },
  { id: 'obj_coins_10', label: 'Recolecta 10 monedas', badgeId: 'b_caza', trigger: 'coins_collected', target: 10 },
  { id: 'obj_kills_3', label: 'Elimina 3 enemigos', badgeId: 'b_sicario', trigger: 'kills', target: 3 },
  { id: 'obj_capture_3', label: 'Captura 3 beacons', badgeId: 'b_conq', trigger: 'beacon_capture', target: 3 },
  { id: 'obj_coins_50', label: 'Recolecta 50 monedas', badgeId: 'b_hacendado', trigger: 'coins_collected', target: 50 },
  { id: 'obj_all_beacons', label: 'Captura todos los beacons', badgeId: 'b_tlatoani', trigger: 'all_beacons_captured', target: 0 },
];

export const BADGES: Badge[] = [
  { id: 'b_conq_jr', name: 'Conquistador Junior', icon: '🏴', xpReward: 50, description: 'Captura tu primera ciudad' },
  { id: 'b_caza', name: 'Caza Recompensas', icon: '💰', xpReward: 30, description: 'Recolecta 10 monedas' },
  { id: 'b_sicario', name: 'Sicario', icon: '⚔️', xpReward: 75, description: 'Elimina 3 enemigos' },
  { id: 'b_conq', name: 'Conquistador', icon: '🏴‍☠️', xpReward: 100, description: 'Captura 3 beacons' },
  { id: 'b_hacendado', name: 'Hacendado', icon: '💎', xpReward: 150, description: 'Recolecta 50 monedas en total' },
  { id: 'b_tlatoani', name: 'Tlatoani', icon: '👑', xpReward: 200, description: 'Captura todos los beacons del mapa' },
];

export const BADGE_MAP = new Map(BADGES.map((b) => [b.id, b]));
export const OBJECTIVE_MAP = new Map(OBJECTIVES.map((o) => [o.id, o]));
