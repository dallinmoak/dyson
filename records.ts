import { MongoClient } from "mongodb";
import { CraftableMaterial, RawCraftable, RawMaterial, StructureCraftable } from "./informal_schema";

import * as dotenv from 'dotenv';
dotenv.config();
// dotenv.config({ path: '.env.local' });

let placeholder: RawMaterial = {
  name: "placeholder",
  materialType: "raw",
  tier: 0,
  categories: ["general"],
  rarity: 0,
  gatheredWith: [],
  icon: "https://placehold.co/200",
}

const sLists = {
  mining: [
    { targetName: "Mining Machine" },
    { targetName: "Advanced Mining Machine" }
  ],
  assemblers: [
    { targetName: "Assembling Machine Mk.I" },
    { targetName: "Assembling Machine Mk.II" },
    { targetName: "Assembling Machine Mk.III" }
  ],
  gasCollectors: [{
    targetName: "Orbital Collector"
  }],
  oilCollectors: [{
    targetName: "Oil Extractor"
  }],
  oilRefiners: [{
    targetName: "Oil Refinery"
  }],
  smelters: [
    { targetName: "Arc Smelter" },
    { targetName: "Plane Smelter" }
  ],
  waterCollectors: [{
    targetName: "Water Pump"
  }],
  chemicalPlants: [
    { targetName: "Chemical Plant" },
    { targetName: "Quantum Chemical Plant" }
  ],
  fractionator: [{
    targetName: "Fractionator"
  }],
  researchers: [{
    targetName: "Matrix Lab"
  }]
}

let raws: RawMaterial[] = [
  {
    name: "Iron Ore",
    materialType: "raw",
    tier: 0,
    categories: ["general"],
    rarity: 0,
    gatheredWith: sLists.mining,
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/8/87/Iron_Ore.png",
  },
  {
    name: "Copper Ore",
    materialType: "raw",
    tier: 0,
    categories: ["general"],
    rarity: 0,
    gatheredWith: sLists.mining,
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/7/78/Copper_Ore.png",
  },
  {
    name: "Stone",
    altName: "Rock",
    materialType: "raw",
    tier: 0,
    categories: ["general"],
    rarity: 0,
    gatheredWith: sLists.mining,
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/d/d4/Stone.png",
  },
  {
    name: "Coal",
    materialType: "raw",
    tier: 0,
    categories: ["general"],
    rarity: 0,
    gatheredWith: sLists.mining,
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/a/a7/Coal.png",
  },
  {
    name: "Water",
    materialType: "raw",
    tier: 0,
    categories: ["general"],
    rarity: 0,
    gatheredWith: sLists.waterCollectors,
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/9/9d/Water.png"
  },
  {
    name: "Crude Oil",
    materialType: "raw",
    tier: 0,
    categories: ["general"],
    rarity: 0,
    gatheredWith: sLists.oilCollectors,
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/6/60/Crude_Oil.png",
  },
  {
    name: "Silcon Ore",
    materialType: "raw",
    tier: 0,
    categories: ["general"],
    rarity: 1,
    gatheredWith: sLists.mining,
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/3/32/Silicon_Ore.png"
  },
  {
    name: "Titanium Ore",
    materialType: "raw",
    tier: 0,
    categories: ["general"],
    rarity: 1,
    gatheredWith: sLists.mining,
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/3/34/Titanium_Ore.png"
  },
  {
    name: "Kimberlite Ore",
    materialType: "raw",
    tier: 0,
    categories: ["general"],
    rarity: 2,
    gatheredWith: sLists.mining,
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/0/0a/Kimberlite_Ore.png"
  },
  {
    name: "Fractal Silicon",
    materialType: "raw",
    tier: 0,
    categories: ["general"],
    rarity: 3,
    gatheredWith: sLists.mining,
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/a/a4/Fractal_Silicon.png"
  },
  {
    name: "Grating Crystal",
    materialType: "raw",
    tier: 0,
    categories: ["general"],
    rarity: 3,
    gatheredWith: sLists.mining,
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/3/31/Grating_Crystal.png"
  },
  {
    name: "Stalagmite Crystal",
    materialType: "raw",
    tier: 0,
    categories: ["general"],
    rarity: 4,
    gatheredWith: sLists.mining,
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/3/3d/Stalagmite_Crystal.png"
  },
  {
    name: "Unipolar Magnet",
    materialType: "raw",
    tier: 0,
    categories: ["general"],
    rarity: 5,
    gatheredWith: sLists.mining,
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/5/59/Unipolar_Magnet.png"
  },
  {
    name: "Fire Ice",
    materialType: "raw",
    tier: 0,
    categories: ["general"],
    rarity: 4,
    gatheredWith: sLists.mining,
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/e/e8/Fire_Ice.png"
  }
];

let rawCraftables: RawCraftable[] = [
  {
    name: "Hydrogen",
    materialType: "raw-craftable",
    tier: 0,
    categories: ["general"],
    rarity: 1,
    recipe: {
      ingredients: [{
        material: { targetName: "Crude Oil" },
        quantity: 2
      }],
      outputCount: 1,
      colaterals: [{
        material: { targetName: "Refined Oil" },
        quantity: 2
      }],
      craftingTime: 4,
      producedIn: sLists.oilRefiners,
      replicator: false
    },
    gatheredWith: sLists.gasCollectors,
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/e/ed/Hydrogen.png"
  },
  {
    name: "Deuterium",
    materialType: "raw-craftable",
    tier: 0,
    categories: ["general"],
    rarity: 3,
    recipe: {
      ingredients: [{
        material: { targetName: "Hydrogen" },
        quantity: 1,
      }],
      outputCount: 0.01,
      colaterals: [{
        material: { targetName: "Hydrogen" },
        quantity: 0.99
      }],
      craftingTime: 0.17,
      producedIn: sLists.fractionator,
      replicator: false
    },
    gatheredWith: sLists.gasCollectors,
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/a/a9/Deuterium.png"
  },
  {
    name: "Sulfuric Acid",
    materialType: "raw-craftable",
    tier: 0,
    categories: ["general"],
    rarity: 4,
    recipe: {
      ingredients: [{
        material: { targetName: "Water" },
        quantity: 4
      }, {
        material: { targetName: "Stone" },
        quantity: 8
      }, {
        material: { targetName: "Refined Oil" },
        quantity: 6
      }],
      outputCount: 4,
      craftingTime: 6,
      producedIn: sLists.assemblers,
      replicator: false
    },
    gatheredWith: sLists.waterCollectors,
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/8/8e/Sulfuric_Acid.png"
  },
  {
    name: "Organic Crystal",
    materialType: "raw-craftable",
    tier: 0,
    categories: ["general"],
    rarity: 4,
    recipe: {
      ingredients: [{
        material: { targetName: "Water" },
        quantity: 1,
      },
      {
        material: { targetName: "Refined Oil" },
        quantity: 1
      },
      {
        material: { targetName: "Plastic" },
        quantity: 2
      }],
      outputCount: 1,
      craftingTime: 6,
      producedIn: sLists.chemicalPlants,
      replicator: false
    },
    gatheredWith: sLists.mining,
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/3/36/Organic_Crystal.png"
  }
]

let tier1Craftables: CraftableMaterial[] = [
  {
    name: "Iron Ingot",
    altName: "Iron",
    materialType: "craftable",
    tier: 1,
    categories: ["general"],
    recipe: {
      ingredients: [{
        material: { targetName: "Iron Ore" },
        quantity: 1
      }],
      outputCount: 1,
      craftingTime: 1,
      producedIn: sLists.smelters,
      replicator: true
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/0/0a/Iron_Ingot.png"
  },
  {
    name: "Copper Ingot",
    altName: "Copper",
    materialType: "craftable",
    tier: 1,
    categories: ["general"],
    recipe: {
      ingredients: [{
        material: { targetName: "Copper Ore" },
        quantity: 1
      }],
      outputCount: 1,
      craftingTime: 1,
      producedIn: sLists.smelters,
      replicator: true
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/0/00/Copper_Ingot.png"
  },
  {
    name: "Magnet",
    materialType: "craftable",
    tier: 1,
    categories: ["general"],
    recipe: {
      ingredients: [{
        material: { targetName: "Iron Ore" },
        quantity: 1
      }],
      outputCount: 1,
      craftingTime: 1.5,
      producedIn: sLists.smelters,
      replicator: true
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/8/8c/Magnet.png"
  },
  {
    name: "Stone Brick",
    altName: "Brick",
    materialType: "craftable",
    tier: 1,
    categories: ["general"],
    recipe: {
      ingredients: [{
        material: { targetName: "Stone" },
        quantity: 1
      }],
      outputCount: 1,
      craftingTime: 1,
      producedIn: sLists.smelters,
      replicator: true
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/6/6d/Stone_Brick.png"
  },
  {
    name: "Energetic Graphite",
    altName: "Graphite",
    materialType: "craftable",
    tier: 1,
    categories: ["general"],
    recipe: {
      ingredients: [{
        material: { targetName: "Coal" },
        quantity: 2
      }],
      outputCount: 1,
      craftingTime: 2,
      producedIn: sLists.smelters,
      replicator: true
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/c/cb/Energetic_Graphite.png"
  },
  {
    name: "High Purity Silicon",
    altName: "Silicon",
    materialType: "craftable",
    tier: 1,
    categories: ["general"],
    recipe: {
      ingredients: [{
        material: { targetName: "Silicon Ore" },
        quantity: 2
      }],
      outputCount: 1,
      craftingTime: 2,
      producedIn: sLists.smelters,
      replicator: true
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/b/b0/High-Purity_Silicon.png"
  },
  {
    name: "Titanium Ingot",
    altName: "Titanium",
    materialType: "craftable",
    tier: 1,
    categories: ["general"],
    recipe: {
      ingredients: [{
        material: { targetName: "Titanium Ore" },
        quantity: 2
      }],
      outputCount: 1,
      craftingTime: 2,
      producedIn: sLists.smelters,
      replicator: true
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/6/61/Titanium_Ingot.png"
  },
  {
    name: "Refined Oil",
    materialType: "craftable",
    tier: 1,
    categories: ["general"],
    recipe: {
      ingredients: [{
        material: { targetName: "Crude Oil" },
        quantity: 2
      }],
      colaterals: [{
        material: { targetName: "Hydrogen" },
        quantity: 1
      }],
      outputCount: 1,
      craftingTime: 4,
      producedIn: sLists.oilCollectors,
      replicator: false
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/5/56/Refined_Oil.png"
  },
  {
    name: "Glass",
    materialType: "craftable",
    tier: 1,
    categories: ["general"],
    recipe: {
      ingredients: [{
        material: { targetName: "Stone" },
        quantity: 2
      }],
      outputCount: 1,
      craftingTime: 2,
      producedIn: sLists.smelters,
      replicator: false
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/1/15/Glass.png"
  },
  {
    name: "Proliferator Mk.I",
    materialType: "craftable",
    tier: 1,
    categories: ["general"],
    recipe: {
      ingredients: [{
        material: { targetName: "Coal" },
        quantity: 1
      }],
      outputCount: 1,
      craftingTime: 0.5,
      producedIn: sLists.assemblers,
      replicator: false
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/8/84/Proliferator_Mk.I.png"
  },
  {
    name: "Combustible Unit",
    materialType: "craftable",
    tier: 2,
    categories: ["energy"],
    recipe: {
      ingredients: [{
        material: { targetName: "Coal" },
        quantity: 3
      }],
      outputCount: 1,
      craftingTime: 3,
      producedIn: sLists.assemblers,
      replicator: true
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/9/91/Combustible_Unit.png"
  },
]

let teir2Craftables: CraftableMaterial[] = [
  {
    name: "Magnetic Coil",
    materialType: "craftable",
    tier: 2,
    categories: ["general"],
    recipe: {
      ingredients: [{
        material: { targetName: "Magnet" },
        quantity: 2
      }, {
        material: { targetName: "Copper Ingot" },
        quantity: 1
      }],
      outputCount: 2,
      craftingTime: 1,
      producedIn: sLists.assemblers,
      replicator: true
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/a/af/Magnetic_Coil.png"
  },
  {
    name: "Steel",
    materialType: "craftable",
    tier: 2,
    categories: ["general"],
    recipe: {
      ingredients: [{
        material: { targetName: "Iron Ingot" },
        quantity: 3
      }],
      outputCount: 1,
      craftingTime: 3,
      producedIn: sLists.smelters,
      replicator: false
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/c/c9/Steel.png"
  },
  {
    name: "Gear",
    materialType: "craftable",
    tier: 2,
    categories: ["general"],
    recipe: {
      ingredients: [{
        material: { targetName: "Iron Ingot" },
        quantity: 2
      }],
      outputCount: 2,
      craftingTime: 1,
      producedIn: sLists.assemblers,
      replicator: true
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/0/06/Gear.png"
  },
  {
    name: "Circuit Board",
    materialType: "craftable",
    tier: 2,
    categories: ["general"],
    recipe: {
      ingredients: [{
        material: { targetName: "Copper Ingot" },
        quantity: 1
      }, {
        material: { targetName: "Iron Ingot" },
        quantity: 2
      }],
      outputCount: 2,
      craftingTime: 1,
      producedIn: sLists.assemblers,
      replicator: true
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/a/a7/Circuit_Board.png"
  },
  {
    name: "Prism",
    materialType: "craftable",
    tier: 2,
    categories: ["general"],
    recipe: {
      ingredients: [{
        material: { targetName: "Glass" },
        quantity: 2
      }],
      outputCount: 2,
      craftingTime: 2,
      producedIn: sLists.assemblers,
      replicator: true
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/a/a8/Prism.png"
  },
  {
    name: "Microcrystalline Component",
    altName: "Micro Component",
    materialType: "craftable",
    tier: 2,
    categories: ["general"],
    recipe: {
      ingredients: [{
        material: { targetName: "High Purity Silicon" },
        quantity: 2
      }, {
        material: { targetName: "Copper Ingot" },
        quantity: 1
      }],
      outputCount: 1,
      craftingTime: 2,
      producedIn: sLists.assemblers,
      replicator: true
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/7/73/Microcrystalline_Component.png"
  },
  {
    name: "Crystal Silicon",
    materialType: "craftable",
    tier: 2,
    categories: ["general"],
    recipe: {
      ingredients: [{
        material: { targetName: "High Purity Silicon" },
        quantity: 1
      }],
      outputCount: 1,
      craftingTime: 2,
      producedIn: sLists.smelters,
      replicator: false
    },
    altRecipes: [{
      ingredients: [{
        material: { targetName: "Fractal Silicon" },
        quantity: 1
      }],
      outputCount: 2,
      craftingTime: 1.5,
      producedIn: sLists.assemblers,
      replicator: false
    }],
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/7/73/Crystal_Silicon.png"
  },
  {
    name: "Diamond",
    materialType: "craftable",
    tier: 2,
    categories: ["general"],
    recipe: {
      ingredients: [{
        material: { targetName: "Energetic Graphite" },
        quantity: 1
      }],
      outputCount: 1,
      craftingTime: 2,
      producedIn: sLists.smelters,
      replicator: false
    },
    altRecipes: [{
      ingredients: [{
        material: { targetName: "Kimberlite Ore" },
        quantity: 1
      }],
      outputCount: 2,
      craftingTime: 1.5,
      producedIn: sLists.smelters,
      replicator: false
    }],
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/e/ea/Diamond.png",
  },
  {
    name: "Hydrogen Fuel Rod",
    materialType: "craftable",
    tier: 2,
    categories: ["general", "energy"],
    recipe: {
      ingredients: [{
        material: { targetName: "Titanium Ingot" },
        quantity: 1
      }, {
        material: { targetName: "Hydrogen" },
        quantity: 10
      }],
      outputCount: 2,
      craftingTime: 6,
      producedIn: sLists.assemblers,
      replicator: true
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/7/75/Hydrogen_Fuel_Rod.png"
  },
  {
    name: "Magnum Ammo Box",
    altName: "Copper bullets x30",
    materialType: "craftable",
    tier: 2,
    categories: ["general", "combat"],
    recipe: {
      ingredients: [{
        material: { targetName: "Copper Ingot" },
        quantity: 3
      }],
      outputCount: 1,
      craftingTime: 1,
      producedIn: sLists.assemblers,
      replicator: false
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/d/d7/Magnum_Ammo_Box.png"
  },
  {
    name: "Plastic",
    materialType: "craftable",
    tier: 2,
    categories: ["general"],
    recipe: {
      ingredients: [{
        material: { targetName: "Refined Oil" },
        quantity: 2,
      }, {
        material: { targetName: "Energetic Graphite" },
        quantity: 1
      }],
      outputCount: 1,
      craftingTime: 3,
      producedIn: sLists.chemicalPlants,
      replicator: false
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/0/0b/Plastic.png"
  },
  {
    name: "Graphene",
    materialType: "craftable",
    tier: 2,
    categories: ["general"],
    recipe: {
      ingredients: [{
        material: { targetName: "Energetic Graphite" },
        quantity: 3
      }, {
        material: { targetName: "Sulfuric Acid" },
        quantity: 1,
      }],
      outputCount: 2,
      craftingTime: 3,
      producedIn: sLists.chemicalPlants,
      replicator: false
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/a/ab/Graphene.png"
  },
  {
    name: "Titanium Crystal",
    materialType: "craftable",
    tier: 2,
    categories: ["general"],
    recipe: {
      ingredients: [{
        material: { targetName: "Organic Crystal" },
        quantity: 1
      }, {
        material: { targetName: "Titanium Ingot" },
        quantity: 3
      }],
      outputCount: 1,
      craftingTime: 4,
      producedIn: sLists.assemblers,
      replicator: true
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/b/ba/Titanium_Crystal.png"
  },
  {
    name: "Titanium Glass",
    materialType: "craftable",
    categories: ["general"],
    tier: 2,
    recipe: {
      ingredients: [{
        material: { targetName: "Glass" },
        quantity: 2
      }, {
        material: { targetName: "Titanium Ingot" },
        quantity: 2
      }, {
        material: { targetName: "Water" },
        quantity: 2
      }],
      outputCount: 2,
      craftingTime: 5,
      producedIn: sLists.assemblers,
      replicator: true
    },
    icon: "https://media.dsp-wiki.com/5/56/Icon_Titanium_Glass.png"
  },
  {
    name: "Energy Matrix",
    altName: "Red Matrix",
    materialType: "craftable",
    tier: 2,
    categories: ["research"],
    recipe: {
      ingredients: [{
        material: { targetName: "Energetic Graphite" },
        quantity: 2,
      }, {
        material: { targetName: "Hydrogen" },
        quantity: 2
      }],
      outputCount: 1,
      craftingTime: 6,
      producedIn: sLists.researchers,
      replicator: true
    },
    icon: "https://media.dsp-wiki.com/8/83/Icon_Energy_Matrix.png"
  }
]

let t2Structures: StructureCraftable[] = [
  {
    name: "Depot Mk.I",
    altName: "Storage Box",
    materialType: "structure",
    tier: 2,
    categories: ["general", "logistics"],
    recipe: {
      ingredients: [{
        material: { targetName: "Stone Brick" },
        quantity: 4
      }, {
        material: { targetName: "Iron Ingot" },
        quantity: 4
      }],
      outputCount: 1,
      craftingTime: 2,
      producedIn: sLists.assemblers,
      replicator: true
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/7/7c/Depot_MK.I.png"
  },
];

let t3Craftables: CraftableMaterial[] = [
  {
    name: "Titanium Alloy",
    materialType: "craftable",
    tier: 3,
    categories: ["general"],
    recipe: {
      ingredients: [{
        material: { targetName: "Titanium Ingot" },
        quantity: 4,
      }, {
        material: { targetName: "Steel" },
        quantity: 4
      }, {
        material: { targetName: "Sulfuric Acid" },
        quantity: 8,
      }],
      outputCount: 4,
      craftingTime: 12,
      producedIn: sLists.smelters,
      replicator: true
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/d/d2/Titanium_Alloy.png",
  },
  {
    name: "Electric Motor",
    materialType: "craftable",
    tier: 3,
    categories: ["general"],
    recipe: {
      ingredients: [{
        material: { targetName: "Iron Ingot" },
        quantity: 2
      }, {
        material: { targetName: "Gear" },
        quantity: 1
      }, {
        material: { targetName: "Magnetic Coil" },
        quantity: 1,
      }],
      outputCount: 1,
      craftingTime: 2,
      producedIn: sLists.assemblers,
      replicator: true
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/c/c3/Electric_Motor.png"
  },
  {
    name: "Plasma Exciter",
    materialType: "craftable",
    tier: 3,
    categories: ["general"],
    recipe: {
      ingredients: [{
        material: { targetName: "Magnetic Coil" },
        quantity: 4,
      }, {
        material: { targetName: "Prism" },
        quantity: 2
      }],
      outputCount: 1,
      craftingTime: 2,
      producedIn: sLists.assemblers,
      replicator: true
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/4/42/Plasma_Exciter.png"
  },
  {
    name: "Electromagnetic Matrix",
    altName: "Blue Matrix",
    materialType: "craftable",
    tier: 3,
    categories: ["research"],
    recipe: {
      ingredients: [{
        material: { targetName: "Magnetic Coil" },
        quantity: 1,
      }, {
        material: { targetName: "Circuit Board" },
        quantity: 1,
      }],
      outputCount: 1,
      craftingTime: 3,
      producedIn: sLists.researchers,
      replicator: true
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/c/cd/Electromagnetic_Matrix.png"

  },
  {
    name: "Photon Combiner",
    materialType: "craftable",
    tier: 3,
    categories: ["general"],
    recipe: {
      ingredients: [{
        material: { targetName: "Prism" },
        quantity: 2
      }, {
        material: { targetName: "Circuit Board" },
        quantity: 1
      }],
      outputCount: 1,
      craftingTime: 3,
      producedIn: sLists.assemblers,
      replicator: true
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/6/6c/Photon_Combiner.png"
  },
  {
    name: "Processor",
    materialType: "craftable",
    tier: 3,
    categories: ["general"],
    recipe: {
      ingredients: [{
        material: { targetName: "Circuit Board" },
        quantity: 2
      }, {
        material: { targetName: "Microcrystalline Component" },
        quantity: 2,
      }],
      outputCount: 1,
      craftingTime: 3,
      producedIn: sLists.assemblers,
      replicator: true
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/4/4e/Processor.png"
  },
  {
    name: "Proliferator Mk.II",
    materialType: "craftable",
    tier: 3,
    categories: ["general", "logistics"],
    recipe: {
      ingredients: [{
        material: { targetName: "Proliferator Mk.I" },
        quantity: 2,
      }, {
        material: { targetName: "Diamond" },
        quantity: 1
      }],
      outputCount: 1,
      craftingTime: 1,
      producedIn: sLists.assemblers,
      replicator: true
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/b/bc/Proliferator_Mk.II.png"
  },
  {
    name: "Foundation",
    materialType: "craftable",
    tier: 3,
    categories: ["general", "logistics"],
    recipe: {
      ingredients: [{
        material: { targetName: "Stone Brick" },
        quantity: 3,
      }, {
        material: { targetName: "Steel" },
        quantity: 1,
      }],
      outputCount: 1,
      craftingTime: 1,
      producedIn: sLists.assemblers,
      replicator: true
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/3/3b/Foundation.png"
  },
  {
    name: "Engine",
    materialType: "craftable",
    tier: 3,
    categories: ["general"],
    recipe: {
      ingredients: [{
        material: { targetName: "Magnetic Coil" },
        quantity: 1
      }, {
        material: { targetName: "Copper Ingot" },
        quantity: 2
      }],
      outputCount: 1,
      craftingTime: 3,
      producedIn: sLists.assemblers,
      replicator: true
    },
    icon: "https://media.dsp-wiki.com/2/21/Icon_Engine.png"
  },
  {
    name: "Titanium Ammo Box",
    materialType: "craftable",
    tier: 3,
    categories: ["combat"],
    recipe: {
      ingredients: [{
        material: { targetName: "Magnum Ammo Box" },
        quantity: 1
      }, {
        material: { targetName: "Titanium Ingot" },
        quantity: 2
      }],
      outputCount: 1,
      craftingTime: 2,
      producedIn: sLists.assemblers,
      replicator: true
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/9/95/Titanium_Ammo_Box.png"
  },
  {
    name: "Shell Set",
    materialType: "craftable",
    tier: 3,
    categories: ["combat"],
    recipe: {
      ingredients: [{
        material: { targetName: "Copper Unit" },
        quantity: 9
      }, {
        material: { targetName: "Combustible Unit" },
        quantity: 2
      }],
      outputCount: 1,
      craftingTime: 1.5,
      producedIn: sLists.assemblers,
      replicator: true
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/7/74/Shell_Set.png"
  },
  {
    name: "Explosive Unit",
    materialType: "craftable",
    tier: 3,
    categories: ["combat"],
    recipe: {
      ingredients: [{
        material: { targetName: "Combustible Unit" },
        quantity: 2
      }, {
        material: { targetName: "Plastic" },
        quantity: 2
      }, {
        material: { targetName: "Sufuric Acid" },
        quantity: 1
      }],
      outputCount: 2,
      craftingTime: 6,
      producedIn: sLists.chemicalPlants,
      replicator: false
    },
    icon: "https://media.dsp-wiki.com/8/88/Icon_Explosive_Unit.png"
  }
];

let t3Structures: StructureCraftable[] = [
  {
    name: "Assembling Machine Mk.I",
    altName: "Assembler 1",
    materialType: 'structure-crafter',
    tier: 3,
    categories: ["general"],
    recipe: {
      ingredients: [{
        material: { targetName: "Iron Ingot" },
        quantity: 4
      }, {
        material: { targetName: "Gear" },
        quantity: 8
      }, {
        material: { targetName: "Circuit Board" },
        quantity: 4
      }],
      outputCount: 1,
      craftingTime: 2,
      producedIn: sLists.assemblers,
      replicator: true
    },
    icon: "https://media.dsp-wiki.com/8/8e/Icon_Assembling_Machine_Mk.I.png"
  }
]

let t4Craftables: CraftableMaterial[] = [
  {
    name: "Carbon Nanotube",
    materialType: "craftable",
    tier: 4,
    categories: ["general"],
    recipe: {
      ingredients: [{
        material: { targetName: "Graphene" },
        quantity: 3,
      }, {
        material: { targetName: "Titanium Alloy" },
        quantity: 1
      }],
      outputCount: 2,
      craftingTime: 4,
      producedIn: sLists.chemicalPlants,
      replicator: false
    },
    altRecipes: [{
      ingredients: [{
        material: { targetName: "Stalagmite Crystal" },
        quantity: 6
      }],
      outputCount: 2,
      craftingTime: 4,
      producedIn: sLists.chemicalPlants,
      replicator: false
    }],
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/b/be/Carbon_Nanotube.png"
  },
]

const addMaterial = async (material) => {
  console.log(`adding material ${material.name}`);
  const id = await getMaterialId(material.name);
  // console.log(`id came back as ${id}. id is ${!!id}y`);
  if (!id) {
    let recordToSave = { ...material };
    if (material.gatheredWith && material.gatheredWith.length > 0) {
      try {

        // console.log(`building gatheredWith Ids for ${material.name}`);
        const gatheredWithIds = await Promise.all(material.gatheredWith
          .map(async (m) => {
            let foundId = await getMaterialId(m.targetName, true);
            // console.log(`   id for ${name} id ${foundId}`);
            return { ...m, id: foundId }
          }));
        recordToSave.gatheredWith = gatheredWithIds
      }
      catch (e) {
        console.log(e);
      }
    }
    if (material.recipe) {
      try {
        recordToSave.recipe = null;
        // console.log(`building recipe`);
        const { ingredients, colaterals, outputCount, craftingTime, producedIn, replicator } = { ...material.recipe };
        // console.log(`building ingredients for ${material.name}`);
        let ingredientsWithIds = await Promise.all(ingredients
          .map(async (i) => {
            let foundId = await getMaterialId(i.material.targetName, true);
            return {
              material: {
                ...i.material,
                id: foundId
              },
              quantity: i.quantity
            }
          }))
        let colateralsWithIds;
        if (colaterals && colaterals.length > 0) {
          colateralsWithIds = await Promise.all(colaterals?.map(async (c) => {
            let foundId = await getMaterialId(c.material.targetName, true);
            return {
              material: {
                ...c.material,
                id: foundId
              },
              quantity: c.quantity
            }
          }));
        }
        let producedInWithIds = await Promise.all(producedIn
          .map(async (p) => {
            const id = await getMaterialId(p.targetName, true)
            return {
              id: id,
              targetName: p.targetName
            }
          }));
        recordToSave.recipe = {
          ingredients: ingredientsWithIds,
          colaterals: colateralsWithIds,
          outputCount: outputCount,
          craftingTime: craftingTime,
          producedIn: producedInWithIds,
          replicator: replicator
        }
      } catch (e) {
        console.log(e);
      }
    }
    try {
      await saveRecord(recordToSave);
    } catch (e) {
      console.log(e);
    }
  }
}

let client = new MongoClient(process.env.MONGO_URI);

const getCol = async () => {
  try {
    if (!client) {
      console.log(`no existing mongo client found. creating a new one`);
      client = new MongoClient(process.env.MONGO_URI);
    }
    // console.log(`attempting to connect...`);
    try {
      // process.stdout.write("checking connection...");
      await client.db().admin().ping();
      // process.stdout.write("already connected\n");
    } catch {
      process.stdout.write("not connected. connecting../");
      await client.connect();
      process.stdout.write("connected\n");
    }
    const db = client.db();
    return db.collection("materials");
  } catch (e) {
    console.log('connecting to materials collection failed :(');
    console.log(e);
  }
}

const getMaterialId = async (name, p = false): Promise<any> => {
  // console.log(`getting id for ${name}. ${p ? 'placeholder requested' : ''}`);
  // console.log(`attepting to connect to mongo..`);
  const col = await getCol();
  try {
    // console.log(`querying for name: ${name}...`);
    const rec = await col.findOne({
      name: name
    })
    // console.log(`query returned ${rec?.name}`);
    const id = rec?._id;
    // console.log(`record's _id is ${id}`);
    if (!rec && p) {
      // console.log(`not found. returning placeholder`);
      return await getMaterialId('placeholder');
    }
    const idString = id?.toString();
    return idString;
  } catch (e) {
    console.log(e);
    return p ? await getMaterialId('placeholder') : false;
  }
}

const saveRecord = async (rec) => {
  const col = await getCol();
  try {
    process.stdout.write(`saving ${rec.name}...`);
    const res = await col.insertOne(rec);
    if (res.acknowledged) {
      process.stdout.write(`saved ${rec.name} with id ${res.insertedId}\n`);
    }
  } catch (e) {
    console.log(e);
  }
}

const linkRefs = async (m) => {
  let newMaterial = m;
  const buildRefList = async (r, ingredient = false) => {
    const target = ingredient ? r.material.targetName : r.targetName
    const id = await getMaterialId(target);
    if (!id) {
      console.log(`Target name ${target} not found`);
      return r;
    } else return { ...r, id: id };
  }
  const linkRecipe = async (r) => {
    if (r.ingredients) {
      newMaterial.recipe.ingredients = await Promise.all(r.ingredients.map(async (i) => await buildRefList(i, true)));
      console.log(`new ingredients:`);
      newMaterial.recipe.ingredient.forEach((i) => console.log(i));
    }
    if (m.recipe.colaterals) {
      newMaterial.recipe.colaterals = await Promise.all(r.colaterals.map(async (i) => await buildRefList(i, true)));
      console.log(`new colaterals:`)
      newMaterial.recipe.colaterals.forEach((i) => console.log(i));
    }
    if (r.producedIn) {
      newMaterial.recipe.producedIn = await Promise.all(r.producedIn.map(async (p) => await buildRefList(p)));
      console.log(`new produced ins`)
      newMaterial.producedIn.forEach((i) => console.log(i));
    }
  }
  if (m.recipe) {
    await linkRecipe(m.recipe);
  } if (m.altRecipes) {
    m.altRecipes.forEach(async (r) => await linkRecipe(r));
  }
  if (m.gatheredWith) {
    newMaterial.gatheredWith = m.gatheredWith.map(async (g) => await buildRefList(g));
    console.log(`new gathered withs`)
    newMaterial.gatheredWith.forEach((i) => console.log(i));
  }
  console.log(`rebuilt ${m.name}`);
}

const createPlaceholder = async () =>
  await addMaterial(placeholder);

// createPlaceholder();

// raws.forEach(async (m, index) => {
//     await addMaterial(m);
// })

// rawCraftables.forEach(async (m, index) => {
//   await addMaterial(m);
// })

// tier1Craftables.forEach(async (m, index) => {
//   await addMaterial(m);
// });

// teir2Craftables.forEach(async (m, index) => {
//     await addMaterial(m);
// });

// t2Structures.forEach(async (m, index) => {
//     await addMaterial(m);
// })

// t3Craftables.forEach(async (m, index) => {
//   await addMaterial(m);
// })

// t3Structures.forEach(async (m, index) => {
//   await addMaterial(m);
// })

const deleteAll = async () => {
  const col = await getCol();
  try {
    const filter = { name: { $ne: "placeholder" } }
    const res = await col.deleteMany(filter);
    console.log(`deleted ${res.deletedCount} records`);
  } catch (e) {
    console.log(e);
  }
}
// deleteAll();

const rebuild = async () => {
  const col = await getCol();
  const t = "Circuit Board"
  console.log(`targeting ${t} for linkRefs...`)
  const m1 = await col.findOne({
    name: t
  })
  console.log(`linking refs for ${m1.name}`)
  await linkRefs(m1);
}

rebuild();

// pnpm --package=typescript dlx tsc --skipLibCheck ./records.ts && node records.js


// mongod -dbpath ~/mongo-data