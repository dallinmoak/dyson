import connect from "./db";

export default async function Home() {

  const db = await connect();

  const collection = await db.collection("materials");

  const data = await collection.find().toArray();

  return (
    <>
      <h1>hello, world!</h1>
      <p>{JSON.stringify(data)}</p>
    </>
  );
}
