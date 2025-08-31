import Material from "@/lib/data";

export async function GET(req, { params }) {
  try {
    const name = (await params).name;
    console.log(`Fetching material by name: ${name}`);
    const materials = await Material.getByName(name);
    if (!materials) {
      return new Response(JSON.stringify({ error: "Material not found" }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    return new Response(JSON.stringify(materials), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}