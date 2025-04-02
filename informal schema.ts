export interface Material {
  _id: string; //mongodb id
  name: string;
  materialType: 'structure' | 'structure-crafter' | 'raw' | 'utility';
  categories: [string];
  AltName: string;
  recipes?: [{
    ingredients: [{
      materialId: string; //mongo id
      quantity: number;
    }]
    outputQuantity: number;
    craftingTime: number;
    producedIn: [{
      materialId: string; //mongo id
    }]
    replicator: boolean;
  }],
  thumbnailUrl: string;
}