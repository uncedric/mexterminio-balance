/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HeroCategory, AdventurerAnimation, WeaponAnimationType } from '../enums/index.ts';
import { ActionType } from '../enums/ActionType.ts';

export { HeroCategory, ActionType, AdventurerAnimation, WeaponAnimationType };

export interface ProjectileConfig {
  radius: number; // Collision sphere radius for shape-cast hit detection
  speed: number; // Units per second
  color?: string; // Override action color for the disc mesh
  modelPath?: string; // Optional GLB model for the projectile
  rotation?: EulerRot; // Optional rotation for the model
  scale?: number; // Optional scale for the model
  shape?: 'cylinder' | 'sphere'; // Optional procedural shape (defaults to cylinder)
}

export interface TargetConfig {
  type: 'ENEMY' | 'ALLY';
  range: number;
  includeBots?: boolean;
}

export interface HeroAction {
  name: string;
  description?: string;
  type: ActionType;
  damage: number; // Positive = Damage, Negative = Heal
  cooldown: number; // Seconds
  duration?: number; // Seconds (for state-based actions like SELF_HEAL)
  stunDuration?: number; // Seconds (duration of stun for targeted actions)
  maxDistance?: number;
  icon?: string;
  sound?: string;
  burstCount?: number; // Bullets per activation (default: 1)
  burstInterval?: number; // ms between burst shots (default: 100)
  color?: string; // Laser/particle color override
  rayWidth?: number; // Width for RAYCAST visual effects (default: 0.2)
  bulletMarkSize?: number; // Size for bullet hit marks (default: 0.25)
  leavesBulletMark?: boolean; // Allow this action to mark world surfaces, including healing rays
  speedModifier?: number; // Multiplier for player movement speed (e.g., 0.5 for half speed)
  projectile?: ProjectileConfig; // Only for ActionType.PROJECTILE
  impulse?: [x: number, y: number, z: number]; // Only for ActionType.MOVEMENT — world-space or camera-relative impulse
  levitationHeight?: number; // Height above the ground maintained for the action duration
  shieldHealth?: number; // Only for ActionType.MOVEMENT — grants a temporary shield HP pool that absorbs damage before base HP
  damageReduction?: number; // Multiplier for incoming damage (e.g. 0.2 for 80% reduction)
  holdToActivate?: boolean; // If true, the action is only active while the button is held (like SCOPE)
  allowPrimaryFire?: boolean; // If true, the player can still use their primary action while this secondary is active
  animation?: WeaponAnimationType; // Procedural animation to trigger
  animationClip?: string; // Name of GLB animation clip to play
  targeting?: TargetConfig; // Configuration for targeted actions
  /** Knockback force applied when melee hits a player. Direction is from attacker to target. */
  knockback?: number;
}

export type HeroFactKind = 'lore' | 'stat';

export interface HeroFact {
  kind: HeroFactKind;
  text: string;
}

export interface HeroStats {
  maxHealth: number;
  moveSpeed: number;
  hitboxSize: number;
  jumpForce?: number;
  gravityScale?: number;
  jumpDashDistance?: number;
  jumpDashSpeedModifier?: number;
}

export interface HeroVoiceLines {
  spawn: string;
  death: string;
  action?: string;
}

export interface HeroAnimations {
  idle?: string;
  walk?: string;
  run?: string;
  jump?: string;
  jumpIdle?: string;
  jumpLand?: string;
  death?: string;
  hitReact?: string;
  shoot?: string;
  secondary?: string;
  crouch?: string;
}

/** World-space position: right / up / forward */
type Vec3 = [x: number, y: number, z: number];
/** Euler rotation in radians: pitch (X) / yaw (Y) / roll (Z) */
type EulerRot = [pitch: number, yaw: number, roll: number];

export interface HeroWeapon {
  modelPath: string;
  scale?: number;
  position?: Vec3;
  rotation?: EulerRot;
  barrelPosition?: Vec3; // Relative to the weapon model origin
  duration?: number; // Seconds before a deployed object disappears (DEPLOY actions only)
  bone?: string; // Optional: name of the bone to attach the model to (for 3P models)
  recoverySpeed?: number; // Speed at which the weapon returns to its idle position
  spawnForwardOffset?: number; // Distance to push the projectile spawn forward from the barrel (in camera direction)
}

export interface Hero {
  id: string;
  name: string;
  race: string;
  category: HeroCategory;
  description: string;
  /** Facts about the character: funny lore and real statistics about their race. */
  facts?: HeroFact[];
  stats: HeroStats;
  primaryAction: HeroAction;
  secondaryAction: HeroAction;
  meleeAction: HeroAction;
  thirdAction?: HeroAction; // Optional 3rd ability activated via Shift key
  voiceLines: HeroVoiceLines;
  weapon?: HeroWeapon; // Held weapon model — omit when modelPath provides the full character
  secondaryWeapon?: HeroWeapon;

  // Overrides for first-person and third-person perspectives
  firstPersonWeapon?: HeroWeapon;
  thirdPersonWeapon?: HeroWeapon;
  firstPersonSecondaryWeapon?: HeroWeapon;
  thirdPersonSecondaryWeapon?: HeroWeapon;

  // Character body configuration
  modelPath: string; // Path to GLB file (served from public/)
  thumbnailPath?: string; // Optional path to hero thumbnail (e.g., '/heros/hero.png')
  renderMode: 'standalone' | 'adventurer'; // 'standalone' uses baked animations, 'adventurer' uses rig retargeting
  animations?: HeroAnimations; // Animation clip name overrides (defaults to rig-based clip names for adventurer)
}
