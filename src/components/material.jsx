import MaterialNameLink from "./materialNameLink";

export default function MaterialComponent({ material }) {
  return (
    <>
      <h1>{material.name}</h1>
      <img src={material.icon} />
      {material.altName && (
        <h2>AKA: {material.altName}</h2>
      )}
      <p>Tier:&nbsp;{material.tier}</p>
      <p>Type:&nbsp;{material.materialType}</p>
      <p>Categories:&nbsp;
        {material.categories.map((category, index) =>
          <span key={index}>
            {category}{index < material.categories.length - 1 ? ', ' : ''}
          </span>
        )}
      </p>

      {material.recipe && (
        <>
          <h2>Recipe:</h2>
          <div className="pl-2">
            <p>Ingredients:</p>
            <ul>
              {material.recipe.ingredients.map((i, index) =>
                <li key={index} className="pl-2">
                  <span>{i.quantity}x&nbsp;<MaterialNameLink id={i.material.id} /></span>
                </li>
              )}
            </ul>
            <p>Crafting Time: {material.recipe.craftingTime}s</p>
            <p>Produces:&nbsp;{material.recipe.outputCount}x&nbsp;<MaterialNameLink id={material._id.toString()} /></p>
            {material.recipe.colaterals && (
              <>
                <p>Colaterals:</p>
                <ul>
                  {material.recipe.colaterals.map((c, index) => {
                    return (
                      <li key={index} className="pl-2">
                        <span>{c.quantity}x&nbsp;<MaterialNameLink id={c.material.id} /></span>
                      </li>
                    )
                  })}
                </ul>
              </>
            )}
            <p>Produced In:&nbsp;
              {material.recipe.producedIn.map((p, index) =>
                <span key={index}>
                  <MaterialNameLink id={p.id} />
                  {index < material.recipe.producedIn.length - 1 ? ', ' : ''}
                </span>
              )}
            </p>
          </div>
        </>
      )}
      {material.rarity && (
        <p>Rarity:&nbsp;{material.rarity}</p>
      )}
      {material.gatheredWith && (
        <p>gathered with:&nbsp;
          {material.gatheredWith.map((g, index) =>
            <span key={index}>
              <MaterialNameLink id={g.id} />
              {index < material.gatheredWith.length - 1 ? ', ' : ''}
            </span>
          )}
        </p>
      )}
    </>
  )
}