import RecipeIngredient from "./recipeIngredient";
import RecipeProducer from "./recipeProducer";

export default function MaterialComponent({ material }) {
  return (
    <>
      <h1>{material.name}</h1>
      <img src={material.thumbnailUrl} />
      <h2>AKA: {material.altName}</h2>
      <p>Type: {material.materialType}</p>
      <p>Categories:&nbsp;
        {material.categories.map((category, index) =>
          <span key={index}>{category}</span>
        )}
      </p>

      {material.recipe && (
        <>
          <h2>Recipe:</h2>
          <p>Ingredients:</p>
          <ul>
            {material.recipe.ingredients.map((ingredient, index) =>
              <RecipeIngredient key={index} ingredient={ingredient} />
            )}
          </ul>
          <p>Crafting Time: {material.recipe.craftingTime}s</p>
          <p>Produced In:&nbsp;
            {material.recipe.producedIn.map((p, index) =>
              <RecipeProducer key={index} id={p.materialId} />
            )}
          </p>
        </>
      )}
    </>
  )
}