import connect from "@/app/db";
import { ObjectId } from "mongodb";
import { decodeName } from "./utils";

class Material {
  static getCollection = async () => {
    const db = await connect();
    return await db.collection("materials");
  }

  static getAll = async () => {
    const col = await this.getCollection();
    return await col.find()
      .sort({
        tier: 1,
        materialType: 1,
        rarity: 1,
      })
      .toArray();
  }

  static getByName = async (name) => {
    const col = await this.getCollection();
    const res = await col.findOne({
      name: decodeName(name)
    })
    return res;
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