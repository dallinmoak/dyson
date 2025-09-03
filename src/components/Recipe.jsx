import MaterialNameLink from "./materialNameLink";

export default function Recipe({ recipeData }) {
  return (
    <div className="rounded border border-white bg-[rgba(255,255,255,0.1)] max-w-[400px] p-2">
      <h2>{recipeData.isAlt ? "Alternative Recipe" : "Recipe"}</h2>
      <div className="pl-2">
        <p>Ingredients:</p>
        <ul>
          {recipeData.ingredients.map((i, index) => (
            <li key={index} className="pl-2">
              <span>
                {i.quantity}x&nbsp;
                <MaterialNameLink id={i.material.id} />
              </span>
            </li>
          ))}
        </ul>
        <p>Crafting Time: {recipeData.craftingTime}s</p>
        <p>
          Produces:&nbsp;{recipeData.outputCount}x&nbsp;
          <MaterialNameLink id={recipeData.materialId.toString()} />
        </p>
        {recipeData.colaterals && (
          <>
            <p>Colaterals:</p>
            <ul>
              {recipeData.colaterals.map((c, index) => {
                return (
                  <li key={index} className="pl-2">
                    <span>
                      {c.quantity}x&nbsp;
                      <MaterialNameLink id={c.material.id} />
                    </span>
                  </li>
                );
              })}
            </ul>
          </>
        )}
        <p>
          Produced In:&nbsp;
          {recipeData.producedIn.map((p, index) => (
            <span key={index}>
              <MaterialNameLink id={p.id} />
              {index < recipeData.producedIn.length - 1 ? ", " : ""}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
