import { NextApiRequest, NextApiResponse } from "next";
import database from "src/infra/database";

async function acess(req: NextApiRequest, res: NextApiResponse) {
  //@ts-ignore
  req;

  try {
    let result: any;
    let usuarioIgual;
    await fetch("https://api.ipify.org/?format=json", {
      method: "GET",
    })
      .then(async (response) => {
        result = await response.json();
      })
      .catch((error) => {
        console.error(error);
      });

    if (result) {
      const date = new Date().toISOString().split("T")[0];

      const cadastros = await database.query("SELECT * FROM ACESSO");
      if (cadastros.rows.length) {
        usuarioIgual = cadastros.rows.filter(
          (item: ResultSearchDatabase) => item.ip == result.ip,
        );
        const compareDates = usuarioIgual[0].dt_acesso
          .toISOString()
          .split("T")[0];
        if (compareDates == date) {
          throw new Error("Este usuário já acessou o site hoje!");
        }
      }

      await database.query({
        text: "INSERT INTO acesso (IP, DT_ACESSO) VALUES ($1, $2)",
        values: [result.ip, date],
      });
      res.status(201).send({ message: "Acesso adicionado com sucesso!" });
    } else {
      throw new Error("Ocorreu um erro ao tentar adicionar um novo acesso!");
    }
  } catch (error) {
    res.status(500).send({ message: (error as Error).message });
  }
}

type ResultSearchDatabase = {
  ip: string;
};

type ResponseData = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  acess(req, res);
}
