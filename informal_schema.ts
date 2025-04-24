type Category = "general" | "combat" | "energy" | "logistics" | "research"

type RecipeItem = {
  material: MaterialRef
  quantity: number
}

type MaterialRef = {
  id?: string,
  targetName?: string
}

type Recipe = {
  ingredients: RecipeItem[]
  colaterals?: RecipeItem[]
  outputCount: number
  craftingTime: number
  producedIn: MaterialRef[] //array of ids for materials of type 'structure-crafter'
  replicator: boolean
}

type BaseMaterial = {
  name: string // UNIQUE
  altName?: string
  materialType: 'structure' | 'structure-crafter' | 'raw' | 'raw-craftable' | 'craftable'
  tier: number //tier logic is based on how far it is from a raw material
  categories: Category[]
  icon: string
  notes?: string
}

type RawMaterial = BaseMaterial & {
  materialType: 'raw'
  tier: 0
  rarity: number
  gatheredWith: MaterialRef[]
}

type CraftableMaterial = BaseMaterial & {
  recipe: Recipe
  altRecipes?: Recipe[]
}

type RawCraftable = CraftableMaterial & {
  materialType: 'raw-craftable'
  tier: 0
  rarity: number
  gatheredWith: MaterialRef[]
}

type StructureCraftable = CraftableMaterial & {
  processingSpeed?: number // units per second
}

export {
  RawMaterial,
  RawCraftable,
  CraftableMaterial,
  StructureCraftable
}

// 0: can be found on home planet
// 1: can be found on home system
// 2: can be found in near (<6ly) systems 
// 3: can be found in far (>6ly) systems 
// 4: can only be found in distant systems (~=15-20 ly)
// 5: only on 1 or two systems in the whole cluster