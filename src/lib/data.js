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
    return await col.find().toArray();
  }

  static getByName = async (name) => {
    console.log(`getting ${name} by name...`);
    if (decodeName(name) == "Placeholder Material") {
      return {
        _id: "000011110000111100001111",
        name: "Placeholder Material",
        categories: ["placeholder"],
        materialType: "utility",
        altName: "Placeholder Material",
        recipes: null,
        thumbnailUrl: "https://placehold.co/200",

      };
    }
    const col = await this.getCollection();
    const res = await col.findOne({
      name: decodeName(name)
    })
    return res;
  }

  static getById = async (id) => {
    if (id == "000011110000111100001111") {
      return {
        _id: "000011110000111100001111",
        name: "Placeholder Material",
        categories: ["placeholder"],
        materialType: "utility",
        AltName: "Placeholder Material",
        recipes: null,
        thumbnailUrl: "https://via.placeholder.com/150",

      }
    }
    const col = await this.getCollection();
    const res = await col.findOne({
      _id: new ObjectId(id)
    });
    return res;
  }

}

export default Material;