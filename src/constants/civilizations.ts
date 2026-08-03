/**
 * Mesoamerican civilizations — player faction for Open World mode.
 * Shared between client (settings UI) and server (team assignment).
 */

export type CivilizationId = 'mexica' | 'maya' | 'olmeca' | 'zapoteca' | 'purepecha' | 'paquime';

export interface Civilization {
  id: CivilizationId;
  name: string;
  region: string;
  environment: string;
  color: string;
  logo: string;
}

export const CIVILIZATIONS: Civilization[] = [
  {
    id: 'mexica',
    name: 'Mexica',
    region: 'Valle Central',
    environment: 'Valles Altos',
    color: '#FFB300',
    logo: '/images/escudos/mexica.png',
  },
  {
    id: 'maya',
    name: 'Maya',
    region: 'Sureste',
    environment: 'Selva / Tierras Bajas',
    color: '#00A86B',
    logo: '/images/escudos/maya.png',
  },
  // {
  //   id: 'olmeca',
  //   name: 'Olmeca',
  //   region: 'Golfo',
  //   environment: 'Costa Tropical',
  //   color: '#6FA08B',
  // },
  {
    id: 'zapoteca',
    name: 'Zapoteca',
    region: 'Sur',
    environment: 'Valles de Montaña',
    color: '#005B9F',
    logo: '/images/escudos/zapoteca.png',
  },
  // {
  //   id: 'purepecha',
  //   name: 'Purépecha',
  //   region: 'Occidente',
  //   environment: 'Volcánica / Costera',
  //   color: '#E85D04',
  // },
  {
    id: 'paquime',
    name: 'Paquimé / Chichimeca',
    region: 'Norte',
    environment: 'Desierto / Árido',
    color: '#6F6A5E',
    logo: '/images/escudos/paquime.png',
  },
];

export const DEFAULT_CIVILIZATION_ID: CivilizationId = 'mexica';

export const CIVILIZATION_COLORS: Record<CivilizationId, string> = CIVILIZATIONS.reduce(
  (colors, civilization) => {
    colors[civilization.id] = civilization.color;
    return colors;
  },
  {} as Record<CivilizationId, string>,
);

export function getCivilizationColor(civilizationId: string | null | undefined): string | null {
  return CIVILIZATIONS.find((civilization) => civilization.id === civilizationId)?.color ?? null;
}

export function getCivilizationLogo(civilizationId: string | null | undefined): string | null {
  return CIVILIZATIONS.find((civilization) => civilization.id === civilizationId)?.logo ?? null;
}
