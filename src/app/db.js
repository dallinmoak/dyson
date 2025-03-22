import { MongoClient } from "mongodb";

let client;

export default async function connect() {
  if (!client) {
    client = new MongoClient(process.env.MONGO_URI);
    await client.connect();
  }
  return client.db();
}