import database from "src/infra/database";
import type { NextApiRequest, NextApiResponse } from "next";

interface ISkills {
  frontend: string[];
  backend: string[];
  mobile: string[];
  databases: string[];
  devops: string[];
}

async function skills(
  request: NextApiRequest,
  response: NextApiResponse,
): Promise<void> {
  try {
    //@ts-ignore
    request;

    const frontendResult = await database.query("SELECT * FROM FRONTEND");
    const frontendValue = frontendResult.rows;

    const backendResult = await database.query("SELECT * FROM BACKEND");
    const backendValue = backendResult.rows;

    const mobileResult = await database.query("SELECT * FROM MOBILE");
    const mobileValue = mobileResult.rows;

    const databasesResult = await database.query("SELECT * FROM DATABASES");
    const databasesValue = databasesResult.rows;

    const deveopsResult = await database.query("SELECT * FROM DEVOPS");
    const devopsValue = deveopsResult.rows;

    const cloudResult = await database.query("SELECT * FROM CLOUD");
    const cloudValue = cloudResult.rows;

    response.status(200).json({
      message: "Busca realizada com sucesso!",
      data: {
        frontend: frontendValue,
        backend: backendValue,
        mobile: mobileValue,
        databases: databasesValue,
        devops: devopsValue,
        cloud: cloudValue,
      },
    });
  } catch (error) {
    console.error(error);
    response.status(500).json({
      message:
        "Erro ao tentar localizar os dados das tabelas relacianadas as Skills!",
      data: null,
    });
  }
}

type ResponseData = {
  message: string;
  data: ISkills[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  skills(req, res);
}