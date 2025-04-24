import { MongoClient } from "mongodb";

import * as dotenv from 'dotenv';
dotenv.config();
// dotenv.config({ path: '.env.local' });

console.log(`mongo string: ${process.env.MONGO_URI}`)

let client;

export default async function connect() {
  if (!client) {
    client = new MongoClient(process.env.MONGO_URI);
    await client.connect();
  }
  return client.db();
}