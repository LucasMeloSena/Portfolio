import database from "src/infra/database";
import type { NextApiRequest, NextApiResponse } from "next";

async function skills(
  request: NextApiRequest,
  response: NextApiResponse,
): Promise<void> {
  try {
    //@ts-ignore
    request;

    const frontendResult = await database.query("SELECT * FROM FRONTEND ORDER BY CODIGO");
    const frontendValue = frontendResult.rows;

    const backendResult = await database.query("SELECT * FROM BACKEND ORDER BY CODIGO");
    const backendValue = backendResult.rows;

    const mobileResult = await database.query("SELECT * FROM MOBILE ORDER BY CODIGO");
    const mobileValue = mobileResult.rows;

    const databasesResult = await database.query("SELECT * FROM DATABASES ORDER BY CODIGO");
    const databasesValue = databasesResult.rows;

    const deveopsResult = await database.query("SELECT * FROM DEVOPS ORDER BY CODIGO");
    const devopsValue = deveopsResult.rows;

    const cloudResult = await database.query("SELECT * FROM CLOUD ORDER BY CODIGO");
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

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  skills(req, res);
}
