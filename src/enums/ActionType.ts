/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum ActionType {
  RAYCAST = 'RAYCAST', // Instant hitscan shot (single or burst via burstCount)
  PROJECTILE = 'PROJECTILE', // Physics-based projectile with travel time
  HEAL = 'HEAL', // Healing projectile burst
  SCOPE = 'SCOPE', // Toggle zoom/visor — client-side state, no projectile
  MELEE = 'MELEE', // Close range attack
  SELF_HEAL = 'SELF_HEAL', // Restore own health over time, no projectile
  DEPLOY = 'DEPLOY', // Deploy an object into the map
  AOE = 'AOE', // Instant area-of-effect damage to all nearby enemies
  AOE_HEAL = 'AOE_HEAL', // Instant area-of-effect heal to all nearby allies
  MOVEMENT = 'MOVEMENT', // Applies a movement impulse (jump boost, dash, etc.)
  TARGETED = 'TARGETED', // Applies an effect to a selected target
}
