import Material from "@/lib/data";
import Link from "next/link";

export default async function Home() {

  const data = await Material.getAll();

  return (
    <>
      <h1>Material List</h1>
      <table className="">
        <thead>
          <tr>
            <th>Icon</th>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {data.map((material) => {
            return (
              <tr key={material._id}>
                <td><img src={material.thumbnail_url} className="h-8" /></td>
                <td><Link href={`/materials/${material._id}`}>
                  {material.name}
                </Link></td>
                <td>{material.materialType}</td>
              </tr>
            )
          })}
        </tbody>
      </table >
    </>
  );
}