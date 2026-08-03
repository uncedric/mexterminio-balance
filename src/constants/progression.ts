/**
 * Constants for the player progression and experience (XP) system.
 */
export const PROGRESSION_CONSTANTS = {
  XP_BEACON_CAPTURE: 100,
  XP_KILL: 10,
  XP_GUARDIAN_KILL: 50,
  XP_WIN: 50,
  MAX_GUEST_LEVEL: 5,
  LEVEL_UP_COIN_REWARD: 100,
};

/**
 * Calculates the total XP required to level up from current level N to N + 1.
 * Using polynomial formula: Math.floor(100 * Math.pow(N, 1.5))
 */
export function getXpRequiredForLevel(level: number): number {
  return Math.floor(300 * Math.pow(level, 1.5));
}
