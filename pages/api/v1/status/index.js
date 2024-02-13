import database from "../../../../infra/database,js";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 as SUN;");
  console.log(result.rows);
  response.status(200).json({ chave: "ACima da Média" });
}

export default status;
