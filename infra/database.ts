import { Client, QueryConfig } from "pg";

async function query(queryObject: string | QueryConfig<any[]>) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT as string),
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  });
  await client.connect();
  await client.query(queryObject);
  const result = await client.query(queryObject);
  await client.end();
  return result;
}

export default {
  query: query,
};
