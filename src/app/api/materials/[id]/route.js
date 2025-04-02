import Material from "@/lib/data";

export async function GET(req, { params }) {
  try {
    const id = (await params).id;
    const materials = await Material.getById(id);
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