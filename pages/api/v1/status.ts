import database from "infra/database";

async function status(request: any, response: any) {
  const result = await database.query("SELECT 1 + 1;");
  console.log(result.rows);
  response.status(200).json({
    chave: "Valor",
  });
}

export default status;
