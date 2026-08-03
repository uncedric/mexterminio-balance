import { describe, expect, it } from 'vitest';
import {
  CIVILIZATION_COLORS,
  CIVILIZATIONS,
  getCivilizationColor,
  getCivilizationLogo,
} from './civilizations';

describe('civilization colors', () => {
  it('uses the canonical Open World beacon palette', () => {
    expect(CIVILIZATION_COLORS.mexica).toBe('#FFB300');
    expect(CIVILIZATION_COLORS.zapoteca).toBe('#005B9F');
    expect(CIVILIZATION_COLORS.maya).toBe('#00A86B');
    expect(CIVILIZATION_COLORS.paquime).toBe('#6F6A5E');
  });

  it('resolves conquered beacon owner colors by civilization id', () => {
    expect(getCivilizationColor('mexica')).toBe('#FFB300');
    expect(getCivilizationColor('zapoteca')).toBe('#005B9F');
    expect(getCivilizationColor('maya')).toBe('#00A86B');
    expect(getCivilizationColor('paquime')).toBe('#6F6A5E');
    expect(getCivilizationColor(null)).toBeNull();
  });

  it('includes logo paths for all active civilizations', () => {
    expect(CIVILIZATIONS).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: 'mexica', logo: '/images/escudos/mexica.png' }),
        expect.objectContaining({ id: 'maya', logo: '/images/escudos/maya.png' }),
        expect.objectContaining({ id: 'zapoteca', logo: '/images/escudos/zapoteca.png' }),
        expect.objectContaining({ id: 'paquime', logo: '/images/escudos/paquime.png' }),
      ]),
    );
    expect(getCivilizationLogo('mexica')).toBe('/images/escudos/mexica.png');
    expect(getCivilizationLogo(null)).toBeNull();
  });
});
