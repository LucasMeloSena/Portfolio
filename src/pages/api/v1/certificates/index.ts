import { NextApiRequest, NextApiResponse } from "next";
import database from "src/infra/database";

async function certificates(req: NextApiRequest, res: NextApiResponse) {
  try {
    //@ts-ignore
    req;

    const certificateResult = await database.query({
      text: `SELECT CERTIFICATES.*, FILES_PDF.FILE_NAME AS PDF_NAME, FILES_PDF.FILE_PATH AS PDF_PATH,
      FILES_IMG.FILE_NAME AS IMG_NAME, FILES_IMG.FILE_PATH AS IMG_PATH
      FROM CERTIFICATES 
      JOIN FILES AS FILES_PDF ON CERTIFICATES.COD_FILE = FILES_PDF.CODIGO 
      JOIN FILES AS FILES_IMG ON CERTIFICATES.COD_IMAGE = FILES_IMG.CODIGO`,
    });
    const certificateValue = certificateResult.rows;

    res.status(200).send({
      data: {
        message: "Certificados localizados com sucesso!",
        certificates: certificateValue,
      },
    });
  } catch (error) {
    res.status(500).send({ message: (error as Error).message });
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  certificates(req, res);
}
