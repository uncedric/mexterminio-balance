import { describe, expect, it } from 'vitest';
import { BEACONS, BEACON_CONSTANTS } from './beaconConstants';

describe('beacon constants', () => {
  it('uses the default capture time for every beacon except Tenochtitlan', () => {
    const mexicoBeacons = BEACONS.mexico ?? [];
    const tenochtitlan = mexicoBeacons.find((beacon) => beacon.id === 'mexico_beacon_tenochtitlan');
    const standardBeacons = mexicoBeacons.filter(
      (beacon) => beacon.id !== 'mexico_beacon_tenochtitlan',
    );

    expect(BEACON_CONSTANTS.DEFAULT_CAPTURE_TIME).toBe(30);
    expect(tenochtitlan?.baseCaptureTime).toBe(60);
    expect(standardBeacons).not.toHaveLength(0);
    expect(standardBeacons.every((beacon) => beacon.baseCaptureTime === 30)).toBe(true);
  });
});
