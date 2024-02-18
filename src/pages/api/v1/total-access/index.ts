import { NextApiRequest, NextApiResponse } from "next";
import database from "src/infra/database";
import { getIntervaloData } from "src/assets/utils/get-intervalo-data";

async function totalAccess(req: NextApiRequest, res: NextApiResponse) {
  try {
    //@ts-ignore
    req;
    const dataCorrente = new Date().getFullYear();
    const resultIntervaloData = getIntervaloData(dataCorrente);

    let totalResults = [];

    for (let i = 0; i < resultIntervaloData.length; i++) {
      const monthData = resultIntervaloData[i];

      const totalMonth = await database.query({
        text: "SELECT COUNT(*)::int FROM ACESSO WHERE DT_ACESSO BETWEEN $1 AND $2",
        values: [monthData.primeiroDia, monthData.ultimoDia],
      });

      const totalMonthValue = totalMonth.rows[0].count;

      totalResults.push(totalMonthValue);
    }

    res.status(200).send({
      data: {
        message: "Total de acessos localizados com sucesso!",
        result: totalResults,
      },
    });
  } catch (error) {
    res.status(500).send({ message: (error as Error).message });
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  totalAccess(req, res);
}
