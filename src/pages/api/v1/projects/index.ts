import { NextApiRequest, NextApiResponse } from "next";
import database from "src/infra/database";

async function projects(req: NextApiRequest, res: NextApiResponse) {
  try {
    //@ts-ignore
    req;

    const projectsResult = await database.query({
      text: `SELECT PROJECTS.*, FILES.FILE_PATH FROM PROJECTS 
      JOIN FILES ON PROJECTS.COD_IMAGE = FILES.CODIGO`,
    });
    const projectsValue = projectsResult.rows;

    res.status(200).send({
      data: {
        message: "Projetos localizados com sucesso!",
        projects: projectsValue,
      },
    });
  } catch (error) {
    res.status(500).send({ message: (error as Error).message });
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  projects(req, res);
}
