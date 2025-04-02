import MaterialComponent from "@/components/material";
import Material from "@/lib/data";

export default async function Page({ params }) {
  const { id } = await params;
  const material = await Material.getById(id);
  return (
    <>
      <MaterialComponent material={material} />
    </>
  );
}