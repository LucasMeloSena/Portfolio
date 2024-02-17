import database from "src/infra/database";
import type { NextApiRequest, NextApiResponse } from "next";

async function files(
  request: NextApiRequest,
  response: NextApiResponse,
): Promise<void> {
  try {
    const codigo = request.body.codigo;
    const filesResult = await database.query({
      text: "SELECT * FROM FILES WHERE CODIGO = $1",
      values: [codigo],
    });
    const filesValue = filesResult.rows;

    response.status(200).json({
      message: "Busca realizada com sucesso!",
      data: filesValue,
    });
  } catch (error) {
    console.error(error);
    response.status(500).json({
      message: "Erro ao tentar localizar os dados de FILES!",
      data: null,
    });
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  files(req, res);
}
