import { MongoClient } from "mongodb";

export default async function connect() {
  const client = new MongoClient(process.env.MONGO_URI);
  const connection = await client.connect();
  return connection;
}