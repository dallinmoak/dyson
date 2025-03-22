import connect from "./db";

export default async function Home() {

  const connection = await connect();

  return (
    <h1>hello, world!</h1>
  );
}
