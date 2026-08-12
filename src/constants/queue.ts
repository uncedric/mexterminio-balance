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

export interface ModeRotationEntry {
  gameMode: GameModeName;
  mapPresets: MapPreset[];
  duration: MatchDuration;
  description?: string;
}

export interface QueueConfig {
  /** Target number of players per team for a full match. */
  playersPerTeam: number;
  /** Minimum number of players per team required to start a match. */
  minPlayersPerTeam: number;
  /** Number of teams in the match (currently 2). */
  teamCount: number;
  /** Rotating mode pool. When set, gameMode/mapPresets/duration are ignored. */
  modeRotation?: ModeRotationEntry[];
  /** List of map presets the matchmaker rotates through in round-robin order. */
  mapPresets?: MapPreset[];
  /** Game mode to use for this queue. */
  gameMode?: GameModeName;
  /** Duration of the match. */
  duration?: MatchDuration;
  /** Description to be heard by the users when joining. */
  description?: string;
}

export const QUEUE_KEY = 'competitive_rotation';

export const QUEUE_CONFIG: QueueConfig = {
  playersPerTeam: 6,
  minPlayersPerTeam: 1,
  teamCount: 2,
  modeRotation: [
    {
      gameMode: GameModeName.ESCORT,
      mapPresets: [{ map: MapId.CITY }],
      duration: MatchDuration.SEVEN_MIN,
      description: 'Escolta la carga hasta su destino',
    },
    /* {
      gameMode: GameModeName.TEAM_DEATHMATCH,
      mapPresets: [{ map: MapId.CITY }, { map: MapId.IMSS }],
      duration: MatchDuration.SEVEN_MIN,
      description: 'Elimina la mayor cantidad de jugadores enemigos',
    }, */
    {
      gameMode: GameModeName.KING_OF_THE_HILL,
      mapPresets: [{ map: MapId.CITY, position: [60.295, 3.376, 19.208] }],
      duration: MatchDuration.SEVEN_MIN,
      description: 'Captura la zona central para ganar',
    },
  ],
};

/**
 * Time in seconds players have to select a hero after a match is found.
 */
export const HERO_SELECTION_TIMER = 40;

/**
 * Default hero assigned if no selection is made before the timer ends.
 */
export const AUTO_PICK_HERO = 'senior';
