"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_1 = require("mongodb");
var dotenv = require("dotenv");
dotenv.config();
var placeholder = {
    name: "placeholder",
    materialType: "raw",
    tier: 0,
    categories: ["general"],
    rarity: 0,
    gatheredWith: [],
    icon: "https://placehold.co/200",
};
var sLists = {
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
};
var raws = [
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
var rawCraftables = [
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
];
var tier1Craftables = [
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
];
var teir2Craftables = [
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
];
var t2Structures = [
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
var t3Craftables = [
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
var t3Structures = [
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
];
var t4Craftables = [
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
];
var addMaterial = function (material) { return __awaiter(void 0, void 0, void 0, function () {
    var id, recordToSave, gatheredWithIds, e_1, _a, ingredients, colaterals, outputCount, craftingTime, producedIn, replicator, ingredientsWithIds, colateralsWithIds, producedInWithIds, e_2, e_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                console.log("adding material ".concat(material.name));
                return [4 /*yield*/, getMaterialId(material.name)];
            case 1:
                id = _b.sent();
                if (!!id) return [3 /*break*/, 15];
                recordToSave = __assign({}, material);
                if (!(material.gatheredWith && material.gatheredWith.length > 0)) return [3 /*break*/, 5];
                _b.label = 2;
            case 2:
                _b.trys.push([2, 4, , 5]);
                return [4 /*yield*/, Promise.all(material.gatheredWith
                        .map(function (m) { return __awaiter(void 0, void 0, void 0, function () {
                        var foundId;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, getMaterialId(m.targetName, true)];
                                case 1:
                                    foundId = _a.sent();
                                    // console.log(`   id for ${name} id ${foundId}`);
                                    return [2 /*return*/, __assign(__assign({}, m), { id: foundId })];
                            }
                        });
                    }); }))];
            case 3:
                gatheredWithIds = _b.sent();
                recordToSave.gatheredWith = gatheredWithIds;
                return [3 /*break*/, 5];
            case 4:
                e_1 = _b.sent();
                console.log(e_1);
                return [3 /*break*/, 5];
            case 5:
                if (!material.recipe) return [3 /*break*/, 12];
                _b.label = 6;
            case 6:
                _b.trys.push([6, 11, , 12]);
                recordToSave.recipe = null;
                _a = __assign({}, material.recipe), ingredients = _a.ingredients, colaterals = _a.colaterals, outputCount = _a.outputCount, craftingTime = _a.craftingTime, producedIn = _a.producedIn, replicator = _a.replicator;
                return [4 /*yield*/, Promise.all(ingredients
                        .map(function (i) { return __awaiter(void 0, void 0, void 0, function () {
                        var foundId;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, getMaterialId(i.material.targetName, true)];
                                case 1:
                                    foundId = _a.sent();
                                    return [2 /*return*/, {
                                            material: __assign(__assign({}, i.material), { id: foundId }),
                                            quantity: i.quantity
                                        }];
                            }
                        });
                    }); }))];
            case 7:
                ingredientsWithIds = _b.sent();
                colateralsWithIds = void 0;
                if (!(colaterals && colaterals.length > 0)) return [3 /*break*/, 9];
                return [4 /*yield*/, Promise.all(colaterals === null || colaterals === void 0 ? void 0 : colaterals.map(function (c) { return __awaiter(void 0, void 0, void 0, function () {
                        var foundId;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, getMaterialId(c.material.targetName, true)];
                                case 1:
                                    foundId = _a.sent();
                                    return [2 /*return*/, {
                                            material: __assign(__assign({}, c.material), { id: foundId }),
                                            quantity: c.quantity
                                        }];
                            }
                        });
                    }); }))];
            case 8:
                colateralsWithIds = _b.sent();
                _b.label = 9;
            case 9: return [4 /*yield*/, Promise.all(producedIn
                    .map(function (p) { return __awaiter(void 0, void 0, void 0, function () {
                    var id;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, getMaterialId(p.targetName, true)];
                            case 1:
                                id = _a.sent();
                                return [2 /*return*/, {
                                        id: id,
                                        targetName: p.targetName
                                    }];
                        }
                    });
                }); }))];
            case 10:
                producedInWithIds = _b.sent();
                recordToSave.recipe = {
                    ingredients: ingredientsWithIds,
                    colaterals: colateralsWithIds,
                    outputCount: outputCount,
                    craftingTime: craftingTime,
                    producedIn: producedInWithIds,
                    replicator: replicator
                };
                return [3 /*break*/, 12];
            case 11:
                e_2 = _b.sent();
                console.log(e_2);
                return [3 /*break*/, 12];
            case 12:
                _b.trys.push([12, 14, , 15]);
                return [4 /*yield*/, saveRecord(recordToSave)];
            case 13:
                _b.sent();
                return [3 /*break*/, 15];
            case 14:
                e_3 = _b.sent();
                console.log(e_3);
                return [3 /*break*/, 15];
            case 15: return [2 /*return*/];
        }
    });
}); };
var client = new mongodb_1.MongoClient(process.env.MONGO_URI);
var getCol = function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, db, e_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 6, , 7]);
                if (!client) {
                    console.log("no existing mongo client found. creating a new one");
                    client = new mongodb_1.MongoClient(process.env.MONGO_URI);
                }
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 5]);
                // process.stdout.write("checking connection...");
                return [4 /*yield*/, client.db().admin().ping()];
            case 2:
                // process.stdout.write("checking connection...");
                _b.sent();
                return [3 /*break*/, 5];
            case 3:
                _a = _b.sent();
                process.stdout.write("not connected. connecting../");
                return [4 /*yield*/, client.connect()];
            case 4:
                _b.sent();
                process.stdout.write("connected\n");
                return [3 /*break*/, 5];
            case 5:
                db = client.db();
                return [2 /*return*/, db.collection("materials")];
            case 6:
                e_4 = _b.sent();
                console.log('connecting to materials collection failed :(');
                console.log(e_4);
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
var getMaterialId = function (name_1) {
    var args_1 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args_1[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, __spreadArray([name_1], args_1, true), void 0, function (name, p) {
        var col, rec, id, idString, e_5, _a;
        if (p === void 0) { p = false; }
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, getCol()];
                case 1:
                    col = _b.sent();
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 6, , 10]);
                    return [4 /*yield*/, col.findOne({
                            name: name
                        })
                        // console.log(`query returned ${rec?.name}`);
                    ];
                case 3:
                    rec = _b.sent();
                    id = rec === null || rec === void 0 ? void 0 : rec._id;
                    if (!(!rec && p)) return [3 /*break*/, 5];
                    return [4 /*yield*/, getMaterialId('placeholder')];
                case 4: 
                // console.log(`not found. returning placeholder`);
                return [2 /*return*/, _b.sent()];
                case 5:
                    idString = id === null || id === void 0 ? void 0 : id.toString();
                    return [2 /*return*/, idString];
                case 6:
                    e_5 = _b.sent();
                    console.log(e_5);
                    if (!p) return [3 /*break*/, 8];
                    return [4 /*yield*/, getMaterialId('placeholder')];
                case 7:
                    _a = _b.sent();
                    return [3 /*break*/, 9];
                case 8:
                    _a = false;
                    _b.label = 9;
                case 9: return [2 /*return*/, _a];
                case 10: return [2 /*return*/];
            }
        });
    });
};
var saveRecord = function (rec) { return __awaiter(void 0, void 0, void 0, function () {
    var col, res, e_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getCol()];
            case 1:
                col = _a.sent();
                _a.label = 2;
            case 2:
                _a.trys.push([2, 4, , 5]);
                process.stdout.write("saving ".concat(rec.name, "..."));
                return [4 /*yield*/, col.insertOne(rec)];
            case 3:
                res = _a.sent();
                if (res.acknowledged) {
                    process.stdout.write("saved ".concat(rec.name, " with id ").concat(res.insertedId, "\n"));
                }
                return [3 /*break*/, 5];
            case 4:
                e_6 = _a.sent();
                console.log(e_6);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
var linkRefs = function (m) { return __awaiter(void 0, void 0, void 0, function () {
    var newMaterial, buildRefList, linkRecipe;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                newMaterial = m;
                buildRefList = function (r_1) {
                    var args_1 = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args_1[_i - 1] = arguments[_i];
                    }
                    return __awaiter(void 0, __spreadArray([r_1], args_1, true), void 0, function (r, ingredient) {
                        var target, id;
                        if (ingredient === void 0) { ingredient = false; }
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    target = ingredient ? r.material.targetName : r.targetName;
                                    return [4 /*yield*/, getMaterialId(target)];
                                case 1:
                                    id = _a.sent();
                                    if (!id) {
                                        console.log("Target name ".concat(target, " not found"));
                                        return [2 /*return*/, r];
                                    }
                                    else
                                        return [2 /*return*/, __assign(__assign({}, r), { id: id })];
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                linkRecipe = function (r) { return __awaiter(void 0, void 0, void 0, function () {
                    var _a, _b, _c;
                    return __generator(this, function (_d) {
                        switch (_d.label) {
                            case 0:
                                if (!r.ingredients) return [3 /*break*/, 2];
                                _a = newMaterial.recipe;
                                return [4 /*yield*/, Promise.all(r.ingredients.map(function (i) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, buildRefList(i, true)];
                                            case 1: return [2 /*return*/, _a.sent()];
                                        }
                                    }); }); }))];
                            case 1:
                                _a.ingredients = _d.sent();
                                console.log("new ingredients:");
                                newMaterial.recipe.ingredient.forEach(function (i) { return console.log(i); });
                                _d.label = 2;
                            case 2:
                                if (!m.recipe.colaterals) return [3 /*break*/, 4];
                                _b = newMaterial.recipe;
                                return [4 /*yield*/, Promise.all(r.colaterals.map(function (i) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, buildRefList(i, true)];
                                            case 1: return [2 /*return*/, _a.sent()];
                                        }
                                    }); }); }))];
                            case 3:
                                _b.colaterals = _d.sent();
                                console.log("new colaterals:");
                                newMaterial.recipe.colaterals.forEach(function (i) { return console.log(i); });
                                _d.label = 4;
                            case 4:
                                if (!r.producedIn) return [3 /*break*/, 6];
                                _c = newMaterial.recipe;
                                return [4 /*yield*/, Promise.all(r.producedIn.map(function (p) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, buildRefList(p)];
                                            case 1: return [2 /*return*/, _a.sent()];
                                        }
                                    }); }); }))];
                            case 5:
                                _c.producedIn = _d.sent();
                                console.log("new produced ins");
                                newMaterial.producedIn.forEach(function (i) { return console.log(i); });
                                _d.label = 6;
                            case 6: return [2 /*return*/];
                        }
                    });
                }); };
                if (!m.recipe) return [3 /*break*/, 2];
                return [4 /*yield*/, linkRecipe(m.recipe)];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2:
                if (m.altRecipes) {
                    m.altRecipes.forEach(function (r) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, linkRecipe(r)];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); });
                }
                if (m.gatheredWith) {
                    newMaterial.gatheredWith = m.gatheredWith.map(function (g) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, buildRefList(g)];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); });
                    console.log("new gathered withs");
                    newMaterial.gatheredWith.forEach(function (i) { return console.log(i); });
                }
                console.log("rebuilt ".concat(m.name));
                return [2 /*return*/];
        }
    });
}); };
var createPlaceholder = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, addMaterial(placeholder)];
        case 1: return [2 /*return*/, _a.sent()];
    }
}); }); };
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
var deleteAll = function () { return __awaiter(void 0, void 0, void 0, function () {
    var col, filter, res, e_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getCol()];
            case 1:
                col = _a.sent();
                _a.label = 2;
            case 2:
                _a.trys.push([2, 4, , 5]);
                filter = { name: { $ne: "placeholder" } };
                return [4 /*yield*/, col.deleteMany(filter)];
            case 3:
                res = _a.sent();
                console.log("deleted ".concat(res.deletedCount, " records"));
                return [3 /*break*/, 5];
            case 4:
                e_7 = _a.sent();
                console.log(e_7);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
// deleteAll();
var rebuild = function () { return __awaiter(void 0, void 0, void 0, function () {
    var col, m1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getCol()];
            case 1:
                col = _a.sent();
                return [4 /*yield*/, col.findOne({
                        name: "Circuit Board"
                    })];
            case 2:
                m1 = _a.sent();
                console.log("linking refs for ".concat(m1.name));
                return [4 /*yield*/, linkRefs(m1)];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
rebuild();
// pnpm --package=typescript dlx tsc --skipLibCheck ./records.ts && node records.js
