import Material from "@/lib/data";
import Link from "next/link";

export default async function Home() {

  const data = await Material.getAll();

  const altData = [...data,
  {
    _id: "1234",
    name: "reaaaaaaaaaaaaaaaaaaaaaly long name",
    materialType: "raw",
  }
  ]

  return (
    <>
      <h1>Material List</h1>
      <table className="">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {altData.map((material) => {
            return (
              <tr key={material._id}>
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