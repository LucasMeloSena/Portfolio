import database from "src/infra/database";
import type { NextApiRequest, NextApiResponse } from "next";

interface IFiles {
  file_name: string;
  file_path: string;
}

async function files(
  request: NextApiRequest,
  response: NextApiResponse,
): Promise<void> {
  try {
    //@ts-ignore
    request;

    const filesResult = await database.query("SELECT * FROM FILES");
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

type ResponseData = {
  message: string;
  data: IFiles[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  files(req, res);
}
