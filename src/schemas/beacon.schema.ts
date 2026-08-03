import { z } from 'zod';

export const BeaconConstantsSchema = z.object({
  DEFAULT_RADIUS: z.number().min(1).max(100),
  DEFAULT_CAPTURE_TIME: z.number().min(1).max(120),
  TEAM_BONUS_MULTIPLIER: z.number().min(0).max(1),
  MAX_TEAM_BONUS_CAP: z.number().min(1).max(10),
  SYNC_INTERVAL_MS: z.number().min(100).max(10000),
  PERSIST_INTERVAL_MS: z.number().min(1000).max(60000),
  HEAL_PER_SECOND: z.number().min(0).max(100),
});
