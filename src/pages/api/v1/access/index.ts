import { NextApiRequest, NextApiResponse } from "next";
import database from "src/infra/database";

async function acess(req: NextApiRequest, res: NextApiResponse) {
  //@ts-ignore
  req;

  try {
    let usuarioIgual;
    const ipAdress = req.headers["x-real-ip"] || req.headers["x-forwarded-for"];

    const date = new Date().toDateString();

    const cadastros = await database.query("SELECT * FROM ACESSO");
    if (cadastros.rows.length) {
      usuarioIgual = cadastros.rows.filter(
        (item: ResultSearchDatabase) => item.ip == ipAdress,
      );
      let warmAcess = usuarioIgual.filter(
        (item: ResultSearchDatabase) => {
        const itemDate = new Date(item.dt_acesso).toDateString();
        return itemDate === date;
      })
      if (warmAcess.length > 0) {
        throw new Error("Este usuário já acessou o site hoje!");
      }
    }

    await database.query({
      text: "INSERT INTO acesso (IP, DT_ACESSO) VALUES ($1, $2)",
      values: [ipAdress, date],
    });
    res.status(201).send({ message: "Acesso adicionado com sucesso!" });
  } catch (error) {
    res.status(500).send({ message: (error as Error).message });
  }
}

type ResultSearchDatabase = {
  ip: string;
  dt_acesso: Date;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  acess(req, res);
}
