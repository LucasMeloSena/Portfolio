import { NextApiRequest, NextApiResponse } from "next";
import database from "src/infra/database";

async function acess(req: NextApiRequest, res: NextApiResponse) {
  try {
    const ipAdress = req.connection.remoteAddress;
    let usuarioIgual;
    const date = new Date().toDateString();

    const cadastros = await database.query("SELECT * FROM ACESSO");
    if (cadastros.rows.length) {
      usuarioIgual = cadastros.rows.filter(
        (item: ResultSearchDatabase) => item.ip == ipAdress,
      );
      let dataCadastros = cadastros.rows;
      let warmAcess = usuarioIgual.filter(
        (item: ResultSearchDatabase, index: number) =>
          item.dt_acesso == dataCadastros[index].dt_acesso,
      );
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
