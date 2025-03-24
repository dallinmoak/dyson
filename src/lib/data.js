import connect from "@/app/db";

class Material {
  static getCollection = async () => {
    const db = await connect();
    return await db.collection("materials");
  }

  static getAll = async () => {
    const col = await this.getCollection();
    return await col.find().toArray();
  }

}

export default Material;