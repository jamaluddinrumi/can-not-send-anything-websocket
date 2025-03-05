import { Database } from "bun:sqlite";

export default defineEventHandler((event) => {
  const db = new Database(":memory:");
  const query = db.query("select 'Hello world' as message;");
  

  return query.get(); // => { message: "Hello world" }
});
