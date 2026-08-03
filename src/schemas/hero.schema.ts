import { z } from 'zod';
import { ActionType } from '../enums/ActionType.ts';
import { HeroCategory } from '../enums/HeroCategory.ts';

export const HeroStatsSchema = z.object({
  maxHealth: z
    .number()
    .min(10, 'Health must be at least 10')
    .max(2000, 'Health cannot exceed 2000'),
  moveSpeed: z
    .number()
    .min(1.0, 'Move speed must be at least 1.0')
    .max(30.0, 'Move speed cannot exceed 30.0'),
  hitboxSize: z
    .number()
    .min(0.1, 'Hitbox size must be at least 0.1')
    .max(5.0, 'Hitbox size cannot exceed 5.0'),
  jumpForce: z.number().min(0).max(100).optional(),
  gravityScale: z.number().min(0.1).max(10.0).optional(),
  jumpDashDistance: z.number().min(0).max(100).optional(),
  jumpDashSpeedModifier: z.number().min(0).max(10.0).optional(),
});

export const ProjectileConfigSchema = z.object({
  radius: z.number().positive(),
  speed: z.number().positive(),
  color: z.string().optional(),
  modelPath: z.string().optional(),
  scale: z.number().positive().optional(),
  shape: z.enum(['cylinder', 'sphere']).optional(),
});

export const HeroActionSchema = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
  type: z.nativeEnum(ActionType),
  damage: z.number().min(-500).max(500),
  cooldown: z.number().min(0, 'Cooldown cannot be negative').max(120),
  duration: z.number().min(0).max(60).optional(),
  stunDuration: z.number().min(0).max(30).optional(),
  maxDistance: z.number().min(0.5).max(500).optional(),
  icon: z.string().optional(),
  sound: z.string().optional(),
  burstCount: z.number().int().positive().optional(),
  burstInterval: z.number().positive().optional(),
  speedModifier: z.number().min(0).max(5).optional(),
  projectile: ProjectileConfigSchema.optional(),
});

export const HeroSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  race: z.string().min(1),
  category: z.nativeEnum(HeroCategory),
  description: z.string().min(1),
  stats: HeroStatsSchema,
  primaryAction: HeroActionSchema,
  secondaryAction: HeroActionSchema,
  meleeAction: HeroActionSchema,
  modelPath: z.string().min(1),
  thumbnailPath: z.string().optional(),
});
