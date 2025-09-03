import MaterialNameLink from "./materialNameLink";
import Recipe from "./Recipe";

export default function MaterialComponent({ material }) {
  return (
    <>
      <h1>{material.name}</h1>
      <img src={material.icon} />
      {material.altName && <h2>AKA: {material.altName}</h2>}
      <p>Tier:&nbsp;{material.tier}</p>
      <p>Type:&nbsp;{material.materialType}</p>
      <p>
        Categories:&nbsp;
        {material.categories.map((category, index) => (
          <span key={index}>
            {category}
            {index < material.categories.length - 1 ? ", " : ""}
          </span>
        ))}
      </p>

      {material.recipe && <Recipe recipeData={material.recipe} />}
      {material.altRecipes && (
        <>
          {material.altRecipes.map((altRecipe, index) => (
            <Recipe key={index} recipeData={altRecipe} />
          ))}
        </>
      )}
      {material.rarity && <p>Rarity:&nbsp;{material.rarity}</p>}
      {material.gatheredWith && (
        <p>
          gathered with:&nbsp;
          {material.gatheredWith.map((g, index) => (
            <span key={index}>
              <MaterialNameLink id={g.id} />
              {index < material.gatheredWith.length - 1 ? ", " : ""}
            </span>
          ))}
        </p>
      )}
      {JSON.stringify(material)}
    </>
  );
}
