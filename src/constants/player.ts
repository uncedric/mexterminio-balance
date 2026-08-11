/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const PLAYER_PHYSICS_CONSTANTS = {
  SPEED: 12,
  JUMP_FORCE: 12,
  JUMP_COOLDOWN_MS: 1000,
  GROUND_RAY_LENGTH: 1.2,
  FALLING_VEL_THRESHOLD: -0.5,
  CROUCH_MOVE_MULTIPLIER: 0.35,

  // Physics / Colliders
  COLLIDER_RADIUS: 0.5,
  COLLIDER_HEIGHT: 0.5,
  COLLIDER_OFFSET_Y: 1.0,
  // Crouch shrinks the capsule hitbox: lower center, shorter height, smaller radius.
  CROUCH_COLLIDER_RADIUS: 0.4,
  CROUCH_COLLIDER_HEIGHT: 0.15,
  CROUCH_COLLIDER_OFFSET_Y: 0.65,
  MOVING_THRESHOLD: 0.1,
  AIRBORNE_THRESHOLD: 0.1,

  // Scope / visor
  SCOPED_MOVE_MULTIPLIER: 0.35,
} as const;
