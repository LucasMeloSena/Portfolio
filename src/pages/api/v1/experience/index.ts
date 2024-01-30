import database from "src/infra/database";
import type { NextApiRequest, NextApiResponse } from "next";

interface IExperience {
  periodo: string;
  titulo: string;
  empresa: string;
  endereco: string;
}

async function experience(
  request: NextApiRequest,
  response: NextApiResponse,
): Promise<void> {
  try {
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

type ResponseData = {
  message: string;
  data: IExperience[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  experience(req, res);
}
