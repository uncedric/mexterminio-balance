export type MysteryItemType =
  | 'speed_boost'
  | 'shield'
  | 'landmine'
  | 'volar'
  | 'heal_circle'
  | 'lightning_gun'
  | 'invisibility';

/** Active pool of abilities rolled when opening a mystery box. Comment out items to disable them. */
export const AVAILABLE_MYSTERY_ITEMS: MysteryItemType[] = [
  // 'speed_boost',
  'shield',
  'landmine',
  'volar',
  'heal_circle',
  'lightning_gun',
  'invisibility',
];

export const INVULNERABILITY_CONSTANTS = {
  BOX_COOLDOWN_MS: 60_000,
  BOX_TRIGGER_RADIUS: 2.5,
  BOX_SERVER_VALIDATION_RADIUS: 5.0,
  BOX_SPIN_SPEED: 1.2,

  LANDMINE_DAMAGE: 300,
  LANDMINE_BLAST_RADIUS: 5.5,
  LANDMINE_DETONATION_RADIUS: 2.5,
  LANDMINE_HEIGHT_TOLERANCE: 2.0,

  SPEED_BOOST_DURATION_MS: 5_000,
  SPEED_BOOST_MULTIPLIER: 2,

  SHIELD_DURATION_MS: 5_000,

  HEAL_CIRCLE_RADIUS: 10,
  HEAL_CIRCLE_HEAL_AMOUNT: 150,
  HEAL_CIRCLE_GROWTH_DURATION_MS: 3000,

  LIGHTNING_GUN_DAMAGE: 200,
  LIGHTNING_GUN_RANGE: 30,
  LIGHTNING_GUN_MAX_TARGETS: 3,

  INVISIBILITY_DURATION_MS: 12_000,
} as const;
