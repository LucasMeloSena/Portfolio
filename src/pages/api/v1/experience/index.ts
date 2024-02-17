import database from "src/infra/database";
import type { NextApiRequest, NextApiResponse } from "next";

async function experience(
  request: NextApiRequest,
  response: NextApiResponse,
): Promise<void> {
  try {
    //@ts-ignore
    request;

    const experienceResult = await database.query("SELECT * FROM EXPERIENCE");
    const experienceValue = experienceResult.rows;

    response.status(200).json({
      message: "Busca realizada com sucesso!",
      data: experienceValue,
    });
  } catch (error) {
    console.error(error);
    response.status(500).json({
      message: "Erro ao tentar localizar os dados de EXPERIENCE!",
      data: null,
    });
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  experience(req, res);
}
