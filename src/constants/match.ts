/**
 * Shared match configuration enums — used by both client and server.
 */

import { MatchDuration } from '../enums/MatchDuration.ts';
import { BotDifficulty } from '../enums/BotDifficulty.ts';
import { GameModeName } from '../enums/GameModeName.ts';
import { EnemyType } from '../enums/EnemyType.ts';

export { MatchDuration, BotDifficulty, GameModeName, EnemyType };

export const BOT_COUNTS: Record<BotDifficulty, number> = {
  [BotDifficulty.NONE]: 0,
  [BotDifficulty.EASY]: 4,
  [BotDifficulty.MEDIUM]: 8,
  [BotDifficulty.HARD]: 12,
};

export const VALID_ENEMY_TYPES = new Set<string>(Object.values(EnemyType));

export const VALID_DURATIONS = new Set<number>(Object.values(MatchDuration) as number[]);

// Single source of truth for game mode metadata.
// Server GameMode classes reference name/description from here.
// Client UI reads this registry directly — no duplication.
export const GAME_MODE_REGISTRY: Record<
  GameModeName,
  {
    name: string;
    description: string;
    isPvE: boolean;
  }
> = {
  [GameModeName.DEATHMATCH]: {
    name: 'Death Match',
    description: 'El primer jugador en llegar a 5 kills gana.',
    isPvE: false,
  },
  [GameModeName.TEAM_DEATHMATCH]: {
    name: 'Equipos',
    description: 'Dos equipos compiten por más kills al final del tiempo.',
    isPvE: false,
  },
  [GameModeName.SURVIVAL]: {
    name: 'Survival',
    description: 'Sobrevive el tiempo completo mientras los drones te atacan.',
    isPvE: true,
  },
  [GameModeName.SANDBOX]: {
    name: 'Sandbox',
    description: 'Prueba armas, objetos y movimientos sin límite de tiempo.',
    isPvE: false,
  },
  [GameModeName.OPEN_WORLD]: {
    name: 'Mundo Abierto',
    description:
      'Mundo abierto por civilización. Aliados los de tu civilización, enemigos los demás.',
    isPvE: false,
  },
  [GameModeName.KING_OF_THE_HILL]: {
    name: 'Captura de Zona',
    description: 'Controla el punto central para acumular 100 puntos y ganar.',
    isPvE: false,
  },
};
