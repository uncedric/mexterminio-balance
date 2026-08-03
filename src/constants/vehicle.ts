/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { VehicleObject } from '../maps/mapObjectTypes.ts';

export interface VehiclePhysicsConfig {
  topSpeed: number;
  friction: number;
  drag: number;
  angularDamping: number;
  /** Optional engine sound file. If provided, uses this instead of synthesized audio. */
  engineSound?: string;
}

export const VEHICLE_PHYSICS_CONFIGS: Record<VehicleObject['vehicleType'], VehiclePhysicsConfig> = {
  car: {
    topSpeed: 38,
    friction: 0.65,
    drag: 0.45,
    angularDamping: 7.5,
  },
  taxi: {
    topSpeed: 38,
    friction: 0.65,
    drag: 0.45,
    angularDamping: 7.5,
  },
  pickupTruck: {
    topSpeed: 36,
    friction: 0.7,
    drag: 0.5,
    angularDamping: 7.5,
  },
  pesero: {
    topSpeed: 36,
    friction: 0.7,
    drag: 0.5,
    angularDamping: 7.5,
    engineSound: 'pesero.ogg',
  },
  boat: {
    topSpeed: 24,
    friction: 0.35,
    drag: 0.35,
    angularDamping: 1.1,
  },
  spaceship: {
    topSpeed: 44,
    friction: 0.25,
    drag: 0.25,
    angularDamping: 1.4,
  },
};
