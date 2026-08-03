/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { EnemyType } from '../enums/EnemyType.ts';

export const ENEMY_PHYSICS_CONSTANTS = {
  CHASE_DIST: 40,
  PATROL_CHANGE_INTERVAL: 4000,
  POSITION_UPDATE_INTERVAL_MS: 50,
  BOT_SEPARATION_RADIUS: 2.0,
  BOT_SEPARATION_WEIGHT: 1.5,
  WAYPOINT_REACHED_RADIUS: 1.5,
  PATHFIND_THROTTLE_MS: 500,
  BOT_CULLING_DISTANCE: 80,
} as const;

export interface EnemyBotSharedConfig {
  maxHealth: number;
  spawnY: number;
  speed: number;
  attackDist: number;
  attackCooldown: number;
  isRanged: boolean;
}

export const ENEMY_BOT_SHARED_CONFIGS: Record<EnemyType, EnemyBotSharedConfig> = {
  [EnemyType.DRONE]: {
    maxHealth: 50,
    spawnY: 1.8,
    speed: 3,
    attackDist: 15,
    attackCooldown: 3500,
    isRanged: true,
  },
  [EnemyType.ZOMBIE]: {
    maxHealth: 100,
    spawnY: 0.5,
    speed: 5,
    attackDist: 1.8,
    attackCooldown: 800,
    isRanged: false,
  },
  [EnemyType.SKELETON]: {
    maxHealth: 250,
    spawnY: 0.5,
    speed: 4.5,
    attackDist: 1.8,
    attackCooldown: 900,
    isRanged: false,
  },
  [EnemyType.ROBOT]: {
    maxHealth: 500,
    spawnY: 0.5,
    speed: 4.0,
    attackDist: 15,
    attackCooldown: 1500,
    isRanged: true,
  },
};
