import MaterialComponent from "@/components/material";
import Material from "@/lib/data";

export default async function Page({ params }) {
  const { name } = await params;
  const material = await Material.getByName(name);
  let materialData = {
    ...material,
  }
  if (material.recipe) {
    materialData.recipe = {
      ...material.recipe,
      materialId: material._id.toString(),
    }
  }
  if (material.altRecipes) {
    materialData.altRecipes = material.altRecipes.map((recipe) => ({
      ...recipe,
      isAlt: true,
      materialId: material._id.toString(),
    }));
  }
  return (
    <>
      <MaterialComponent material={materialData} />
    </>
  );
}