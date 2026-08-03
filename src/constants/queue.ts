/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GameModeName, MatchDuration } from './match.ts';
import { MapId } from '../enums/MapId.ts';

export { MapId };

export interface MapPreset {
  map: MapId;
  /** Optional beacon / King of the Hill capture zone center position [x, y, z] */
  position?: [number, number, number];
}

export interface QueueConfig {
  /** Target number of players per team for a full match. */
  playersPerTeam: number;
  /** Minimum number of players per team required to start a match. */
  minPlayersPerTeam: number;
  /** Number of teams in the match (currently 2). */
  teamCount: number;
  /** List of map presets the matchmaker rotates through in round-robin order. */
  mapPresets: MapPreset[];
  /** Game mode to use for this queue. */
  gameMode: GameModeName;
  /** Duration of the match. */
  duration: MatchDuration;
  /** Description to be heard by the users when joining. */
  description?: string;
}

export const QUEUE_CONFIGS: Record<string, QueueConfig> = {
  competitive_6v6: {
    playersPerTeam: 6,
    minPlayersPerTeam: 1,
    teamCount: 2,
    mapPresets: [{ map: MapId.CITY }, { map: MapId.IMSS }],
    gameMode: GameModeName.TEAM_DEATHMATCH,
    duration: MatchDuration.THREE_MIN,
    description: 'Elimina la mayor cantidad de jugadores enemigos',
  },
  capture_6v6: {
    playersPerTeam: 10,
    minPlayersPerTeam: 1,
    teamCount: 2,
    mapPresets: [
      // DEBUG: commented out to test IMSS beacon
      { map: MapId.CITY, position: [-5.607, -0.5, -13.48] },
      { map: MapId.IMSS, position: [11.642, 2.644, -25.617] },
    ],
    gameMode: GameModeName.KING_OF_THE_HILL,
    duration: MatchDuration.THREE_MIN,
    description: 'Captura la zona central para ganar',
  },
};

/**
 * Time in seconds players have to select a hero after a match is found.
 */
export const HERO_SELECTION_TIMER = 40;

/**
 * Default hero assigned if no selection is made before the timer ends.
 */
export const AUTO_PICK_HERO = 'senior';
