import database from "src/infra/database";
import type { NextApiRequest, NextApiResponse } from "next";

async function education(
  request: NextApiRequest,
  response: NextApiResponse,
): Promise<void> {
  try {
    //@ts-ignore
    request;

    const educationResult = await database.query("SELECT * FROM EDUCATION");
    const educationValue = educationResult.rows;

    response.status(200).json({
      message: "Busca realizada com sucesso!",
      data: educationValue,
    });
  } catch (error) {
    console.error(error);
    response.status(500).json({
      message: "Erro ao tentar localizar os dados de Education!",
      data: null,
    });
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  education(req, res);
}
