import MaterialComponent from "@/components/material";
import Material from "@/lib/data";

export default async function Page({ params }) {
  const { name } = await params;
  const material = await Material.getByName(name);
  return (
    <>
      <MaterialComponent material={material} />
    </>
  );
}