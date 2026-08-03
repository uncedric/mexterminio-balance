import { describe, it, expect } from 'vitest';
import { HEROES } from '../heros/index.ts';
import { HeroSchema } from './hero.schema.ts';
import { BEACON_CONSTANTS } from '../constants/beaconConstants.ts';
import { BeaconConstantsSchema } from './beacon.schema.ts';

describe('Mexterminio Public Balance Schema Validation', () => {
  it('validates that all registered heroes adhere to HeroSchema bounds', () => {
    for (const [heroId, hero] of Object.entries(HEROES)) {
      const result = HeroSchema.safeParse(hero);
      if (!result.success) {
        console.error(`Validation failed for hero "${heroId}":`, result.error.format());
      }
      expect(result.success).toBe(true);
    }
  });

  it('validates beacon constants against BeaconConstantsSchema', () => {
    const result = BeaconConstantsSchema.safeParse(BEACON_CONSTANTS);
    if (!result.success) {
      console.error('Validation failed for BEACON_CONSTANTS:', result.error.format());
    }
    expect(result.success).toBe(true);
  });
});
