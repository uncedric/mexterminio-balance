export interface PlaceComplexSubObject {
  type: 'complex';
  modelPath: string;
  position: [number, number, number];
  scale?: number;
  rotation?: [number, number, number];
  snapToGround?: boolean;
  groundOffset?: number;
}

export interface PlaceNatureSubObject {
  type: 'nature';
  model: string;
  modelDirectory?: string;
  position: [number, number, number];
  scale?: number;
  rotation?: [number, number, number];
  snapToGround?: boolean;
  groundOffset?: number;
}

export interface PlaceNatureInstanceGroup {
  type: 'nature_instances';
  model: string;
  snapToGround?: boolean;
  instances: PlaceNatureInstanceData[];
}

export interface PlaceNatureInstanceData {
  position: [number, number, number];
  scale?: number;
  rotation?: [number, number, number];
}

export type PlaceSubObject =
  | PlaceComplexSubObject
  | PlaceNatureSubObject
  | PlaceNatureInstanceGroup;

export interface PlaceDefinition {
  id: string;
  objects: PlaceSubObject[];
  cullingDistance?: number;
}

export const PLACE_DEFINITIONS: Record<string, PlaceDefinition> = {
  cemetery: {
    id: 'cemetery',
    cullingDistance: 120,
    objects: [
      {
        type: 'complex',
        modelPath: '/models/objects/Gravestone.glb',
        position: [0, 0, 0],
        scale: 1,
        snapToGround: true,
        groundOffset: -0.5,
      },
      {
        type: 'nature',
        model: 'Tree_Bare_1_B_Color1.glb',
        position: [-3, 0, 2],
        scale: 1.5,
        rotation: [0, 0.5, 0],
        snapToGround: true,
      },
      {
        type: 'nature',
        model: 'Tree_Bare_1_B_Color1.glb',
        position: [3, 0, -1],
        scale: 1.2,
        rotation: [0, 2.1, 0],
        snapToGround: true,
      },
    ],
  },
};
