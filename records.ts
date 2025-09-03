import { MongoClient } from "mongodb";
import {
  CraftableMaterial,
  RawCraftable,
  RawMaterial,
  StructureCraftable,
} from "./informal_schema";

import * as dotenv from "dotenv";
import { get } from "http";
// dotenv.config();
dotenv.config({ path: ".env.local" });

let placeholder: RawMaterial = {
  name: "placeholder",
  materialType: "raw",
  tier: 0,
  categories: ["general"],
  rarity: 0,
  gatheredWith: [],
  icon: "https://placehold.co/200",
};

const sLists = {
  mining: [
    { targetName: "Mining Machine" },
    { targetName: "Advanced Mining Machine" },
  ],
  assemblers: [
    { targetName: "Assembling Machine Mk.I" },
    { targetName: "Assembling Machine Mk.II" },
    { targetName: "Assembling Machine Mk.III" },
  ],
  gasCollectors: [
    {
      targetName: "Orbital Collector",
    },
  ],
  oilCollectors: [
    {
      targetName: "Oil Extractor",
    },
  ],
  oilRefiners: [
    {
      targetName: "Oil Refinery",
    },
  ],
  smelters: [{ targetName: "Arc Smelter" }, { targetName: "Plane Smelter" }],
  waterCollectors: [
    {
      targetName: "Water Pump",
    },
  ],
  chemicalPlants: [
    { targetName: "Chemical Plant" },
    { targetName: "Quantum Chemical Plant" },
  ],
  fractionator: [
    {
      targetName: "Fractionator",
    },
  ],
  researchers: [
    {
      targetName: "Matrix Lab",
    },
  ],
  colliders: [
    {
      targetName: "Miniature Particle Collider",
    },
  ],
};

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
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/9/9d/Water.png",
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
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/3/32/Silicon_Ore.png",
  },
  {
    name: "Titanium Ore",
    materialType: "raw",
    tier: 0,
    categories: ["general"],
    rarity: 1,
    gatheredWith: sLists.mining,
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/3/34/Titanium_Ore.png",
  },
  {
    name: "Kimberlite Ore",
    materialType: "raw",
    tier: 0,
    categories: ["general"],
    rarity: 2,
    gatheredWith: sLists.mining,
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/0/0a/Kimberlite_Ore.png",
  },
  {
    name: "Fractal Silicon",
    materialType: "raw",
    tier: 0,
    categories: ["general"],
    rarity: 3,
    gatheredWith: sLists.mining,
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/a/a4/Fractal_Silicon.png",
  },
  {
    name: "Grating Crystal",
    materialType: "raw",
    tier: 0,
    categories: ["general"],
    rarity: 3,
    gatheredWith: sLists.mining,
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/3/31/Grating_Crystal.png",
  },
  {
    name: "Stalagmite Crystal",
    materialType: "raw",
    tier: 0,
    categories: ["general"],
    rarity: 4,
    gatheredWith: sLists.mining,
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/3/3d/Stalagmite_Crystal.png",
  },
  {
    name: "Unipolar Magnet",
    materialType: "raw",
    tier: 0,
    categories: ["general"],
    rarity: 5,
    gatheredWith: sLists.mining,
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/5/59/Unipolar_Magnet.png",
  },
  {
    name: "Fire Ice",
    materialType: "raw",
    tier: 0,
    categories: ["general"],
    rarity: 4,
    gatheredWith: sLists.mining,
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/e/e8/Fire_Ice.png",
  },
];

let rawCraftables: RawCraftable[] = [
  {
    name: "Hydrogen",
    materialType: "raw-craftable",
    tier: 0,
    categories: ["general"],
    rarity: 1,
    recipe: {
      ingredients: [
        {
          material: { targetName: "Crude Oil" },
          quantity: 2,
        },
      ],
      outputCount: 1,
      colaterals: [
        {
          material: { targetName: "Refined Oil" },
          quantity: 2,
        },
      ],
      craftingTime: 4,
      producedIn: sLists.oilRefiners,
      replicator: false,
    },
    gatheredWith: sLists.gasCollectors,
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/e/ed/Hydrogen.png",
  },
  {
    name: "Deuterium",
    materialType: "raw-craftable",
    tier: 0,
    categories: ["general"],
    rarity: 3,
    recipe: {
      ingredients: [
        {
          material: { targetName: "Hydrogen" },
          quantity: 1,
        },
      ],
      outputCount: 0.01,
      colaterals: [
        {
          material: { targetName: "Hydrogen" },
          quantity: 0.99,
        },
      ],
      craftingTime: 0.17,
      producedIn: sLists.fractionator,
      replicator: false,
    },
    gatheredWith: sLists.gasCollectors,
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/a/a9/Deuterium.png",
  },
  {
    name: "Sulfuric Acid",
    materialType: "raw-craftable",
    tier: 0,
    categories: ["general"],
    rarity: 4,
    recipe: {
      ingredients: [
        {
          material: { targetName: "Water" },
          quantity: 4,
        },
        {
          material: { targetName: "Stone" },
          quantity: 8,
        },
        {
          material: { targetName: "Refined Oil" },
          quantity: 6,
        },
      ],
      outputCount: 4,
      craftingTime: 6,
      producedIn: sLists.assemblers,
      replicator: false,
    },
    gatheredWith: sLists.waterCollectors,
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/8/8e/Sulfuric_Acid.png",
  },
  {
    name: "Organic Crystal",
    materialType: "raw-craftable",
    tier: 0,
    categories: ["general"],
    rarity: 4,
    recipe: {
      ingredients: [
        {
          material: { targetName: "Water" },
          quantity: 1,
        },
        {
          material: { targetName: "Refined Oil" },
          quantity: 1,
        },
        {
          material: { targetName: "Plastic" },
          quantity: 2,
        },
      ],
      outputCount: 1,
      craftingTime: 6,
      producedIn: sLists.chemicalPlants,
      replicator: false,
    },
    gatheredWith: sLists.mining,
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/3/36/Organic_Crystal.png",
  },
];

let t1Craftables: CraftableMaterial[] = [
  {
    name: "Iron Ingot",
    altName: "Iron",
    materialType: "craftable",
    tier: 1,
    categories: ["general"],
    recipe: {
      ingredients: [
        {
          material: { targetName: "Iron Ore" },
          quantity: 1,
        },
      ],
      outputCount: 1,
      craftingTime: 1,
      producedIn: sLists.smelters,
      replicator: true,
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/0/0a/Iron_Ingot.png",
  },
  {
    name: "Copper Ingot",
    altName: "Copper",
    materialType: "craftable",
    tier: 1,
    categories: ["general"],
    recipe: {
      ingredients: [
        {
          material: { targetName: "Copper Ore" },
          quantity: 1,
        },
      ],
      outputCount: 1,
      craftingTime: 1,
      producedIn: sLists.smelters,
      replicator: true,
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/0/00/Copper_Ingot.png",
  },
  {
    name: "Magnet",
    materialType: "craftable",
    tier: 1,
    categories: ["general"],
    recipe: {
      ingredients: [
        {
          material: { targetName: "Iron Ore" },
          quantity: 1,
        },
      ],
      outputCount: 1,
      craftingTime: 1.5,
      producedIn: sLists.smelters,
      replicator: true,
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/8/8c/Magnet.png",
  },
  {
    name: "Stone Brick",
    altName: "Brick",
    materialType: "craftable",
    tier: 1,
    categories: ["general"],
    recipe: {
      ingredients: [
        {
          material: { targetName: "Stone" },
          quantity: 1,
        },
      ],
      outputCount: 1,
      craftingTime: 1,
      producedIn: sLists.smelters,
      replicator: true,
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/6/6d/Stone_Brick.png",
  },
  {
    name: "Energetic Graphite",
    altName: "Graphite",
    materialType: "craftable",
    tier: 1,
    categories: ["general"],
    recipe: {
      ingredients: [
        {
          material: { targetName: "Coal" },
          quantity: 2,
        },
      ],
      outputCount: 1,
      craftingTime: 2,
      producedIn: sLists.smelters,
      replicator: true,
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/c/cb/Energetic_Graphite.png",
  },
  {
    name: "High Purity Silicon",
    altName: "Silicon",
    materialType: "craftable",
    tier: 1,
    categories: ["general"],
    recipe: {
      ingredients: [
        {
          material: { targetName: "Silicon Ore" },
          quantity: 2,
        },
      ],
      outputCount: 1,
      craftingTime: 2,
      producedIn: sLists.smelters,
      replicator: true,
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/b/b0/High-Purity_Silicon.png",
  },
  {
    name: "Titanium Ingot",
    altName: "Titanium",
    materialType: "craftable",
    tier: 1,
    categories: ["general"],
    recipe: {
      ingredients: [
        {
          material: { targetName: "Titanium Ore" },
          quantity: 2,
        },
      ],
      outputCount: 1,
      craftingTime: 2,
      producedIn: sLists.smelters,
      replicator: true,
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/6/61/Titanium_Ingot.png",
  },
  {
    name: "Refined Oil",
    materialType: "craftable",
    tier: 1,
    categories: ["general"],
    recipe: {
      ingredients: [
        {
          material: { targetName: "Crude Oil" },
          quantity: 2,
        },
      ],
      colaterals: [
        {
          material: { targetName: "Hydrogen" },
          quantity: 1,
        },
      ],
      outputCount: 1,
      craftingTime: 4,
      producedIn: sLists.oilCollectors,
      replicator: false,
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/5/56/Refined_Oil.png",
  },
  {
    name: "Glass",
    materialType: "craftable",
    tier: 1,
    categories: ["general"],
    recipe: {
      ingredients: [
        {
          material: { targetName: "Stone" },
          quantity: 2,
        },
      ],
      outputCount: 1,
      craftingTime: 2,
      producedIn: sLists.smelters,
      replicator: false,
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/1/15/Glass.png",
  },
  {
    name: "Proliferator Mk.I",
    materialType: "craftable",
    tier: 1,
    categories: ["general"],
    recipe: {
      ingredients: [
        {
          material: { targetName: "Coal" },
          quantity: 1,
        },
      ],
      outputCount: 1,
      craftingTime: 0.5,
      producedIn: sLists.assemblers,
      replicator: false,
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/8/84/Proliferator_Mk.I.png",
  },
  {
    name: "Combustible Unit",
    materialType: "craftable",
    tier: 2,
    categories: ["energy"],
    recipe: {
      ingredients: [
        {
          material: { targetName: "Coal" },
          quantity: 3,
        },
      ],
      outputCount: 1,
      craftingTime: 3,
      producedIn: sLists.assemblers,
      replicator: true,
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/9/91/Combustible_Unit.png",
  },
];

let t2Craftables: CraftableMaterial[] = [
  {
    name: "Magnetic Coil",
    materialType: "craftable",
    tier: 2,
    categories: ["general"],
    recipe: {
      ingredients: [
        {
          material: { targetName: "Magnet" },
          quantity: 2,
        },
        {
          material: { targetName: "Copper Ingot" },
          quantity: 1,
        },
      ],
      outputCount: 2,
      craftingTime: 1,
      producedIn: sLists.assemblers,
      replicator: true,
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/a/af/Magnetic_Coil.png",
  },
  {
    name: "Steel",
    materialType: "craftable",
    tier: 2,
    categories: ["general"],
    recipe: {
      ingredients: [
        {
          material: { targetName: "Iron Ingot" },
          quantity: 3,
        },
      ],
      outputCount: 1,
      craftingTime: 3,
      producedIn: sLists.smelters,
      replicator: false,
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/c/c9/Steel.png",
  },
  {
    name: "Gear",
    materialType: "craftable",
    tier: 2,
    categories: ["general"],
    recipe: {
      ingredients: [
        {
          material: { targetName: "Iron Ingot" },
          quantity: 2,
        },
      ],
      outputCount: 2,
      craftingTime: 1,
      producedIn: sLists.assemblers,
      replicator: true,
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/0/06/Gear.png",
  },
  {
    name: "Circuit Board",
    materialType: "craftable",
    tier: 2,
    categories: ["general"],
    recipe: {
      ingredients: [
        {
          material: { targetName: "Copper Ingot" },
          quantity: 1,
        },
        {
          material: { targetName: "Iron Ingot" },
          quantity: 2,
        },
      ],
      outputCount: 2,
      craftingTime: 1,
      producedIn: sLists.assemblers,
      replicator: true,
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/a/a7/Circuit_Board.png",
  },
  {
    name: "Prism",
    materialType: "craftable",
    tier: 2,
    categories: ["general"],
    recipe: {
      ingredients: [
        {
          material: { targetName: "Glass" },
          quantity: 2,
        },
      ],
      outputCount: 2,
      craftingTime: 2,
      producedIn: sLists.assemblers,
      replicator: true,
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/a/a8/Prism.png",
  },
  {
    name: "Microcrystalline Component",
    altName: "Micro Component",
    materialType: "craftable",
    tier: 2,
    categories: ["general"],
    recipe: {
      ingredients: [
        {
          material: { targetName: "High Purity Silicon" },
          quantity: 2,
        },
        {
          material: { targetName: "Copper Ingot" },
          quantity: 1,
        },
      ],
      outputCount: 1,
      craftingTime: 2,
      producedIn: sLists.assemblers,
      replicator: true,
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/7/73/Microcrystalline_Component.png",
  },
  {
    name: "Crystal Silicon",
    materialType: "craftable",
    tier: 2,
    categories: ["general"],
    recipe: {
      ingredients: [
        {
          material: { targetName: "High Purity Silicon" },
          quantity: 1,
        },
      ],
      outputCount: 1,
      craftingTime: 2,
      producedIn: sLists.smelters,
      replicator: false,
    },
    altRecipes: [
      {
        ingredients: [
          {
            material: { targetName: "Fractal Silicon" },
            quantity: 1,
          },
        ],
        outputCount: 2,
        craftingTime: 1.5,
        producedIn: sLists.assemblers,
        replicator: false,
      },
    ],
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/7/73/Crystal_Silicon.png",
  },
  {
    name: "Diamond",
    materialType: "craftable",
    tier: 2,
    categories: ["general"],
    recipe: {
      ingredients: [
        {
          material: { targetName: "Energetic Graphite" },
          quantity: 1,
        },
      ],
      outputCount: 1,
      craftingTime: 2,
      producedIn: sLists.smelters,
      replicator: false,
    },
    altRecipes: [
      {
        ingredients: [
          {
            material: { targetName: "Kimberlite Ore" },
            quantity: 1,
          },
        ],
        outputCount: 2,
        craftingTime: 1.5,
        producedIn: sLists.smelters,
        replicator: false,
      },
    ],
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/e/ea/Diamond.png",
  },
  {
    name: "Hydrogen Fuel Rod",
    materialType: "craftable",
    tier: 2,
    categories: ["general", "energy"],
    recipe: {
      ingredients: [
        {
          material: { targetName: "Titanium Ingot" },
          quantity: 1,
        },
        {
          material: { targetName: "Hydrogen" },
          quantity: 10,
        },
      ],
      outputCount: 2,
      craftingTime: 6,
      producedIn: sLists.assemblers,
      replicator: true,
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/7/75/Hydrogen_Fuel_Rod.png",
  },
  {
    name: "Magnum Ammo Box",
    altName: "Copper bullets x30",
    materialType: "craftable",
    tier: 2,
    categories: ["general", "combat"],
    recipe: {
      ingredients: [
        {
          material: { targetName: "Copper Ingot" },
          quantity: 3,
        },
      ],
      outputCount: 1,
      craftingTime: 1,
      producedIn: sLists.assemblers,
      replicator: false,
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/d/d7/Magnum_Ammo_Box.png",
  },
  {
    name: "Plastic",
    materialType: "craftable",
    tier: 2,
    categories: ["general"],
    recipe: {
      ingredients: [
        {
          material: { targetName: "Refined Oil" },
          quantity: 2,
        },
        {
          material: { targetName: "Energetic Graphite" },
          quantity: 1,
        },
      ],
      outputCount: 1,
      craftingTime: 3,
      producedIn: sLists.chemicalPlants,
      replicator: false,
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/0/0b/Plastic.png",
  },
  {
    name: "Graphene",
    materialType: "craftable",
    tier: 2,
    categories: ["general"],
    recipe: {
      ingredients: [
        {
          material: { targetName: "Energetic Graphite" },
          quantity: 3,
        },
        {
          material: { targetName: "Sulfuric Acid" },
          quantity: 1,
        },
      ],
      outputCount: 2,
      craftingTime: 3,
      producedIn: sLists.chemicalPlants,
      replicator: false,
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/a/ab/Graphene.png",
  },
  {
    name: "Titanium Crystal",
    materialType: "craftable",
    tier: 2,
    categories: ["general"],
    recipe: {
      ingredients: [
        {
          material: { targetName: "Organic Crystal" },
          quantity: 1,
        },
        {
          material: { targetName: "Titanium Ingot" },
          quantity: 3,
        },
      ],
      outputCount: 1,
      craftingTime: 4,
      producedIn: sLists.assemblers,
      replicator: true,
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/b/ba/Titanium_Crystal.png",
  },
  {
    name: "Titanium Glass",
    materialType: "craftable",
    categories: ["general"],
    tier: 2,
    recipe: {
      ingredients: [
        {
          material: { targetName: "Glass" },
          quantity: 2,
        },
        {
          material: { targetName: "Titanium Ingot" },
          quantity: 2,
        },
        {
          material: { targetName: "Water" },
          quantity: 2,
        },
      ],
      outputCount: 2,
      craftingTime: 5,
      producedIn: sLists.assemblers,
      replicator: true,
    },
    icon: "https://media.dsp-wiki.com/5/56/Icon_Titanium_Glass.png",
  },
  {
    name: "Energy Matrix",
    altName: "Red Matrix",
    materialType: "craftable",
    tier: 2,
    categories: ["research"],
    recipe: {
      ingredients: [
        {
          material: { targetName: "Energetic Graphite" },
          quantity: 2,
        },
        {
          material: { targetName: "Hydrogen" },
          quantity: 2,
        },
      ],
      outputCount: 1,
      craftingTime: 6,
      producedIn: sLists.researchers,
      replicator: true,
    },
    icon: "https://media.dsp-wiki.com/8/83/Icon_Energy_Matrix.png",
  },
];

let t2Structures: StructureCraftable[] = [
  {
    name: "Depot Mk.I",
    altName: "Storage Box",
    materialType: "structure",
    tier: 2,
    categories: ["general", "logistics"],
    recipe: {
      ingredients: [
        {
          material: { targetName: "Stone Brick" },
          quantity: 4,
        },
        {
          material: { targetName: "Iron Ingot" },
          quantity: 4,
        },
      ],
      outputCount: 1,
      craftingTime: 2,
      producedIn: sLists.assemblers,
      replicator: true,
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/7/7c/Depot_MK.I.png",
  },
];

let t3Craftables: CraftableMaterial[] = [
  {
    name: "Titanium Alloy",
    materialType: "craftable",
    tier: 3,
    categories: ["general"],
    recipe: {
      ingredients: [
        {
          material: { targetName: "Titanium Ingot" },
          quantity: 4,
        },
        {
          material: { targetName: "Steel" },
          quantity: 4,
        },
        {
          material: { targetName: "Sulfuric Acid" },
          quantity: 8,
        },
      ],
      outputCount: 4,
      craftingTime: 12,
      producedIn: sLists.smelters,
      replicator: true,
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/d/d2/Titanium_Alloy.png",
  },
  {
    name: "Electric Motor",
    materialType: "craftable",
    tier: 3,
    categories: ["general"],
    recipe: {
      ingredients: [
        {
          material: { targetName: "Iron Ingot" },
          quantity: 2,
        },
        {
          material: { targetName: "Gear" },
          quantity: 1,
        },
        {
          material: { targetName: "Magnetic Coil" },
          quantity: 1,
        },
      ],
      outputCount: 1,
      craftingTime: 2,
      producedIn: sLists.assemblers,
      replicator: true,
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/c/c3/Electric_Motor.png",
  },
  {
    name: "Plasma Exciter",
    materialType: "craftable",
    tier: 3,
    categories: ["general"],
    recipe: {
      ingredients: [
        {
          material: { targetName: "Magnetic Coil" },
          quantity: 4,
        },
        {
          material: { targetName: "Prism" },
          quantity: 2,
        },
      ],
      outputCount: 1,
      craftingTime: 2,
      producedIn: sLists.assemblers,
      replicator: true,
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/4/42/Plasma_Exciter.png",
  },
  {
    name: "Electromagnetic Matrix",
    altName: "Blue Matrix",
    materialType: "craftable",
    tier: 3,
    categories: ["research"],
    recipe: {
      ingredients: [
        {
          material: { targetName: "Magnetic Coil" },
          quantity: 1,
        },
        {
          material: { targetName: "Circuit Board" },
          quantity: 1,
        },
      ],
      outputCount: 1,
      craftingTime: 3,
      producedIn: sLists.researchers,
      replicator: true,
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/c/cd/Electromagnetic_Matrix.png",
  },
  {
    name: "Photon Combiner",
    materialType: "craftable",
    tier: 3,
    categories: ["general"],
    recipe: {
      ingredients: [
        {
          material: { targetName: "Prism" },
          quantity: 2,
        },
        {
          material: { targetName: "Circuit Board" },
          quantity: 1,
        },
      ],
      outputCount: 1,
      craftingTime: 3,
      producedIn: sLists.assemblers,
      replicator: true,
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/6/6c/Photon_Combiner.png",
  },
  {
    name: "Processor",
    materialType: "craftable",
    tier: 3,
    categories: ["general"],
    recipe: {
      ingredients: [
        {
          material: { targetName: "Circuit Board" },
          quantity: 2,
        },
        {
          material: { targetName: "Microcrystalline Component" },
          quantity: 2,
        },
      ],
      outputCount: 1,
      craftingTime: 3,
      producedIn: sLists.assemblers,
      replicator: true,
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/4/4e/Processor.png",
  },
  {
    name: "Proliferator Mk.II",
    materialType: "craftable",
    tier: 3,
    categories: ["general", "logistics"],
    recipe: {
      ingredients: [
        {
          material: { targetName: "Proliferator Mk.I" },
          quantity: 2,
        },
        {
          material: { targetName: "Diamond" },
          quantity: 1,
        },
      ],
      outputCount: 1,
      craftingTime: 1,
      producedIn: sLists.assemblers,
      replicator: true,
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/b/bc/Proliferator_Mk.II.png",
  },
  {
    name: "Foundation",
    materialType: "craftable",
    tier: 3,
    categories: ["general", "logistics"],
    recipe: {
      ingredients: [
        {
          material: { targetName: "Stone Brick" },
          quantity: 3,
        },
        {
          material: { targetName: "Steel" },
          quantity: 1,
        },
      ],
      outputCount: 1,
      craftingTime: 1,
      producedIn: sLists.assemblers,
      replicator: true,
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/3/3b/Foundation.png",
  },
  {
    name: "Engine",
    materialType: "craftable",
    tier: 3,
    categories: ["general"],
    recipe: {
      ingredients: [
        {
          material: { targetName: "Magnetic Coil" },
          quantity: 1,
        },
        {
          material: { targetName: "Copper Ingot" },
          quantity: 2,
        },
      ],
      outputCount: 1,
      craftingTime: 3,
      producedIn: sLists.assemblers,
      replicator: true,
    },
    icon: "https://media.dsp-wiki.com/2/21/Icon_Engine.png",
  },
  {
    name: "Titanium Ammo Box",
    materialType: "craftable",
    tier: 3,
    categories: ["combat"],
    recipe: {
      ingredients: [
        {
          material: { targetName: "Magnum Ammo Box" },
          quantity: 1,
        },
        {
          material: { targetName: "Titanium Ingot" },
          quantity: 2,
        },
      ],
      outputCount: 1,
      craftingTime: 2,
      producedIn: sLists.assemblers,
      replicator: true,
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/9/95/Titanium_Ammo_Box.png",
  },
  {
    name: "Shell Set",
    materialType: "craftable",
    tier: 3,
    categories: ["combat"],
    recipe: {
      ingredients: [
        {
          material: { targetName: "Copper Unit" },
          quantity: 9,
        },
        {
          material: { targetName: "Combustible Unit" },
          quantity: 2,
        },
      ],
      outputCount: 1,
      craftingTime: 1.5,
      producedIn: sLists.assemblers,
      replicator: true,
    },
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/7/74/Shell_Set.png",
  },
  {
    name: "Explosive Unit",
    materialType: "craftable",
    tier: 3,
    categories: ["combat"],
    recipe: {
      ingredients: [
        {
          material: { targetName: "Combustible Unit" },
          quantity: 2,
        },
        {
          material: { targetName: "Plastic" },
          quantity: 2,
        },
        {
          material: { targetName: "Sufuric Acid" },
          quantity: 1,
        },
      ],
      outputCount: 2,
      craftingTime: 6,
      producedIn: sLists.chemicalPlants,
      replicator: false,
    },
    icon: "https://media.dsp-wiki.com/8/88/Icon_Explosive_Unit.png",
  },
];

let t3Structures: StructureCraftable[] = [
  {
    name: "Assembling Machine Mk.I",
    altName: "Assembler 1",
    materialType: "structure-crafter",
    tier: 3,
    categories: ["general"],
    recipe: {
      ingredients: [
        {
          material: { targetName: "Iron Ingot" },
          quantity: 4,
        },
        {
          material: { targetName: "Gear" },
          quantity: 8,
        },
        {
          material: { targetName: "Circuit Board" },
          quantity: 4,
        },
      ],
      outputCount: 1,
      craftingTime: 2,
      producedIn: sLists.assemblers,
      replicator: true,
    },
    icon: "https://media.dsp-wiki.com/8/8e/Icon_Assembling_Machine_Mk.I.png",
  },
];

let t4Craftables: CraftableMaterial[] = [
  {
    name: "Carbon Nanotube",
    materialType: "craftable",
    tier: 4,
    categories: ["general"],
    recipe: {
      ingredients: [
        {
          material: { targetName: "Graphene" },
          quantity: 3,
        },
        {
          material: { targetName: "Titanium Alloy" },
          quantity: 1,
        },
      ],
      outputCount: 2,
      craftingTime: 4,
      producedIn: sLists.chemicalPlants,
      replicator: false,
    },
    altRecipes: [
      {
        ingredients: [
          {
            material: { targetName: "Stalagmite Crystal" },
            quantity: 6,
          },
        ],
        outputCount: 2,
        craftingTime: 4,
        producedIn: sLists.chemicalPlants,
        replicator: false,
      },
    ],
    icon: "https://static.wikia.nocookie.net/dyson-sphere-program/images/b/be/Carbon_Nanotube.png",
  },
  {
    name: "Electromagnetic Turbine",
    materialType: "craftable",
    tier: 4,
    categories: ["general"],
    recipe: {
      ingredients: [
        {
          material: { targetName: "Magnetic Coil" },
          quantity: 2,
        },
        {
          material: { targetName: "Electric Motor" },
          quantity: 2,
        },
      ],
      outputCount: 1,
      craftingTime: 2,
      producedIn: sLists.assemblers,
      replicator: true,
    },
    icon: "https://media.dsp-wiki.com/5/53/Icon_Electromagnetic_Turbine.png",
  },
];

let t5Craftables: CraftableMaterial[] = [
  {
    name: "Particle Container",
    materialType: "craftable",
    tier: 5,
    categories: ["general"],
    recipe: {
      ingredients: [
        {
          material: { targetName: "Electromagnetic Turbine" },
          quantity: 2,
        },
        {
          material: { targetName: "Copper Ingot" },
          quantity: 2,
        },
        {
          material: { targetName: "Graphene" },
          quantity: 2,
        },
      ],
      outputCount: 1,
      craftingTime: 4,
      producedIn: sLists.assemblers,
      replicator: true,
    },
    altRecipes: [
      {
        ingredients: [
          {
            material: { targetName: "Unipolar Magnet" },
            quantity: 10,
          },
          {
            material: { targetName: "Copper Ingot" },
            quantity: 2,
          },
        ],
        outputCount: 1,
        craftingTime: 4,
        producedIn: sLists.assemblers,
        replicator: false,
      },
    ],
    icon: "https://media.dsp-wiki.com/f/fd/Icon_Particle_Container.png",
  },
  {
    name: "Super-Magnetic Ring",
    materialType: "craftable",
    tier: 5,
    categories: ["general"],
    recipe: {
      ingredients: [
        {
          material: { targetName: "Electromagnetic Turbine" },
          quantity: 2,
        },
        {
          material: { targetName: "Magnet" },
          quantity: 3,
        },
        {
          material: { targetName: "Energetic Graphite" },
          quantity: 1,
        },
      ],
      outputCount: 1,
      craftingTime: 3,
      producedIn: sLists.assemblers,
      replicator: true,
    },
    icon: "https://media.dsp-wiki.com/b/b4/Icon_Super-Magnetic_Ring.png",
  },
];

let t6Craftables: CraftableMaterial[] = [
  {
    name: "Annihilation Constraint Sphere",
    materialType: "craftable",
    tier: 6,
    categories: ["general"],
    recipe: {
      ingredients: [
        {
          material: { targetName: "Particle Container" },
          quantity: 1,
        },
        {
          material: { targetName: "Processor" },
          quantity: 1,
        },
      ],
      outputCount: 1,
      craftingTime: 20,
      producedIn: sLists.assemblers,
      replicator: false,
    },
    icon: "https://media.dsp-wiki.com/3/37/Icon_Annihilation_Constraint_Sphere.png",
  },
  {
    name: "Strange Matter",
    materialType: "craftable",
    tier: 6,
    categories: ["general", "energy"],
    recipe: {
      ingredients: [
        {
          material: { targetName: "Particle Container" },
          quantity: 2,
        },
        {
          material: { targetName: "Iron Ingot" },
          quantity: 2,
        },
        {
          material: { targetName: "Deuterium" },
          quantity: 10,
        },
      ],
      outputCount: 1,
      craftingTime: 20,
      producedIn: sLists.colliders,
      replicator: false,
    },
    icon: "https://media.dsp-wiki.com/8/8f/Icon_Strange_Matter.png",
  },
];

const addMaterial = async (material) => {
  // console.log(`adding material ${material.name}`);
  const id = await getMaterialId(material.name);
  // console.log(`id came back as ${id}. id is ${!!id}y`);
  const placeholderId = await getMaterialId("placeholder");

  let recordToSave = { ...material };
  if (material.gatheredWith && material.gatheredWith.length > 0) {
    const gatheredWithIds = material.gatheredWith.map((m) => {
      return { ...m, id: placeholderId };
    });
    recordToSave.gatheredWith = gatheredWithIds;
  }

  const insertRecipePlaceholders = (r) => {
    const {
      ingredients,
      colaterals,
      outputCount,
      craftingTime,
      producedIn,
      replicator,
    } = { ...r };
    let ingredientsWithIds = ingredients.map((i) => {
      return {
        material: {
          ...i.material,
          id: placeholderId,
        },
        quantity: i.quantity,
      };
    });
    let colateralsWithIds = colaterals?.map((c) => {
      return {
        material: {
          ...c.material,
          id: placeholderId,
        },
        quantity: c.quantity,
      };
    });
    let producedInWithIds = producedIn.map((p) => {
      return {
        id: placeholderId,
        targetName: p.targetName,
      };
    });
    return {
      ingredients: ingredientsWithIds,
      colaterals: colateralsWithIds,
      outputCount: outputCount,
      craftingTime: craftingTime,
      producedIn: producedInWithIds,
      replicator: replicator,
    };
  };

  if (material.recipe) {
    recordToSave.recipe = null;
    recordToSave.recipe = insertRecipePlaceholders(material.recipe);
  }
  if (material.altRecipes && material.altRecipes.length > 0) {
    recordToSave.altRecipes = material.altRecipes.map(insertRecipePlaceholders);
  }
  try {
    const savedRecordId = await saveRecord(recordToSave);
    const col = await getCol();
    const savedRecord = await col.findOne({ _id: savedRecordId });
    return savedRecord;
  } catch (e) {
    console.log(e);
  }
};

const mongoUri = process.env.MONGO_URI;
let client = new MongoClient(mongoUri);

const getCol = async () => {
  try {
    if (!client) {
      client = new MongoClient(mongoUri);
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
    console.log("connecting to materials collection failed :(");
    console.log(e);
  }
};

const getMaterialId = async (name, p = false): Promise<any> => {
  // console.log(`getting id for ${name}. ${p ? 'placeholder requested' : ''}`);
  // console.log(`attepting to connect to mongo..`);
  const col = await getCol();
  try {
    // console.log(`querying for name: ${name}...`);
    const rec = await col.findOne({
      name: name,
    });
    // console.log(`query returned ${rec?.name}`);
    const id = rec?._id;
    // console.log(`record's _id is ${id}`);
    if (!rec && p) {
      // console.log(`not found. returning placeholder`);
      return await getMaterialId("placeholder");
    }
    const idString = id?.toString();
    return idString;
  } catch (e) {
    console.log(e);
    return p ? await getMaterialId("placeholder") : false;
  }
};

const saveRecord = async (rec) => {
  const col = await getCol();
  try {
    process.stdout.write(`saving ${rec.name}...`);
    const res = await col.insertOne(rec);
    if (res.acknowledged) {
      process.stdout.write(`saved ${rec.name} with id ${res.insertedId}\n`);
      return res.insertedId;
    }
  } catch (e) {
    console.log(e);
  }
};

const linkRefs = async (m) => {
  if (!m) {
    // console.log(`Material not found`);
    return;
  }
  const insertId = async (r) => {
    const id = await getMaterialId(r.targetName);
    if (!id) {
      // console.log(`Target name ${r.targetName} not found`);
      return r;
    } else {
      // console.log(`Target name ${r.targetName} found with id ${id}`);
      return { targetName: r.targetName, id: id };
    }
  };
  const linkRecipe = async (r) => {
    const newIngredients = r.ingredients
      ? await Promise.all(
          r.ingredients.map(async (i) => {
            const newMaterial = await insertId(i.material);
            return { ...i, material: newMaterial };
          })
        )
      : undefined;
    const newColaterals = r.colaterals
      ? await Promise.all(
          r.colaterals.map(async (c) => {
            const newColateral = await insertId(c.material);
            return { ...c, material: newColateral };
          })
        )
      : undefined;
    const newProducedIns = r.producedIn
      ? await Promise.all(r.producedIn.map(async (p) => await insertId(p)))
      : undefined;
    return {
      ...r,
      ingredients: newIngredients,
      colaterals: newColaterals,
      producedIn: newProducedIns,
    };
  };
  let newRecipe = m.recipe;
  if (m.recipe) {
    const linkedRecipe = await linkRecipe(m.recipe);
    newRecipe = linkedRecipe;
  }
  let newAltRecipes = m.altRecipes;
  if (m.altRecipes) {
    const linkedAltRecipes = await Promise.all(
      m.altRecipes?.map(async (r) => await linkRecipe(r))
    );
    newAltRecipes = linkedAltRecipes;
  }
  let newGatheredWith = m.gatheredWith;
  if (m.gatheredWith) {
    const linkedGatheredWith = await Promise.all(
      m.gatheredWith?.map(async (g) => await insertId(g))
    );
    newGatheredWith = linkedGatheredWith;
  }
  let newMaterial = {
    ...m,
    recipe: newRecipe,
    altRecipes: newAltRecipes,
    gatheredWith: newGatheredWith,
  };
  if (JSON.stringify(m) === JSON.stringify(newMaterial)) {
    console.log(`no changes to ${m.name}`);
    return;
  } else {
    console.log(`changes detected for material ${m.name}`);
    const col = await getCol();
    await col.replaceOne({ _id: newMaterial._id }, newMaterial);
  }
};

const createPlaceholder = async () => await addMaterial(placeholder);

const createMaterials = async () => {
  const createdMaterialsPromises: Promise<any>[] = [
    ...raws.map((m) => addMaterial(m)),
    ...rawCraftables.map((m) => addMaterial(m)),
    ...t1Craftables.map((m) => addMaterial(m)),
    ...t2Craftables.map((m) => addMaterial(m)),
    ...t2Structures.map((m) => addMaterial(m)),
    ...t3Craftables.map((m) => addMaterial(m)),
    ...t3Structures.map((m) => addMaterial(m)),
    ...t4Craftables.map((m) => addMaterial(m)),
    ...t5Craftables.map((m) => addMaterial(m)),
    ...t6Craftables.map((m) => addMaterial(m)),
  ];
  let createdMaterials = [];
  for (const p of createdMaterialsPromises) {
    const material = await p;
    createdMaterials.push(material);
  }
  console.log(`created ${createdMaterials.length} materials`);
  // console.log(createdMaterials);
  return createdMaterials;
};

const linkCreatedMaterials = async (createdMaterials) => {
  const linkedMaterials = [];
  for (const m of createdMaterials) {
    if (!m) {
      const index = createdMaterials.indexOf(m);
      console.log(
        `there's an undefined material at index ${index} of createdMaterials`
      );
    } else {
      console.log(`linking ${m.name}...`);
      const linkedM = await linkRefs(m);
      linkedMaterials.push(linkedM);
    }
  }
  return linkedMaterials;
};

const deleteAll = async () => {
  const col = await getCol();
  try {
    const filter = { name: { $ne: "placeholder" } };
    const res = await col.deleteMany(filter);
    console.log(`deleted ${res.deletedCount} records`);
  } catch (e) {
    console.log(e);
  }
};

const getAll = async () => {
  const col = await getCol();
  return await col
    .find({
      name: { $ne: "placeholder" },
      // name: { $eq: "Proliferator Mk.I" },
    })
    .toArray();
};

const execute = async () => {
  await deleteAll();
  await createMaterials();
  const createdMaterials = await getAll();
  await linkCreatedMaterials(createdMaterials);

  console.log("End of file");
};

execute();

// pnpm --package=typescript dlx tsc --skipLibCheck ./records.ts && node records.js

// mongod -dbpath ~/mongo-data
