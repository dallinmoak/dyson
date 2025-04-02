import connect from "@/app/db";
import { ObjectId } from "mongodb";

class Material {
  static getCollection = async () => {
    const db = await connect();
    return await db.collection("materials");
  }

  static getAll = async () => {
    const col = await this.getCollection();
    return await col.find().toArray();
  }

  static getById = async (id) => {
    const col = await this.getCollection();
    const res = await col.findOne({
      _id: new ObjectId(id)
    });
    return res;
  }

}

export default Material;