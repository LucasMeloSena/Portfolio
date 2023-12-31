import database from "infra/database";

async function status(request: any, response: any) {
  response.status(200).json({ message: "Página de status ok" });
}

export default status;
