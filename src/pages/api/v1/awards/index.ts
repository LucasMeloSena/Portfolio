import { NextApiRequest, NextApiResponse } from "next";
import database from "src/infra/database";

async function awards(req: NextApiRequest, res: NextApiResponse) {
  try {
    //@ts-ignore
    req;

    const awardsResult = await database.query({
      text: `SELECT AWARDS.*, FILES_PDF.FILE_NAME AS PDF_NAME, FILES_PDF.FILE_PATH AS PDF_PATH,
      FILES_IMG.FILE_PATH AS IMG_PATH FROM AWARDS 
      JOIN FILES AS FILES_PDF ON AWARDS.COD_FILE = FILES_PDF.CODIGO 
      JOIN FILES AS FILES_IMG ON AWARDS.COMPANY_LOGO = FILES_IMG.CODIGO ORDER BY CODIGO DESC`,
    });
    const awardsValue = awardsResult.rows;

    res.status(200).send({
      data: {
        message: "Prêmios localizados com sucesso!",
        awards: awardsValue,
      },
    });
  } catch (error) {
    res.status(500).send({ message: (error as Error).message });
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  awards(req, res);
}
