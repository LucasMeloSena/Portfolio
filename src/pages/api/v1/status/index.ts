import database from "src/infra/database";
import { QueryResult } from "pg";
import type { NextApiRequest, NextApiResponse } from "next";

interface IStatus {
  update_at: Date;
  dependencies: object;
  database: object;
  version: string;
  max_connections: number;
  opened_connections: number;
}

async function status(request: NextApiRequest, response: NextApiResponse) {
  try {
    //@ts-ignore
    request;

    const updateAt: string = new Date().toISOString();

    const serverVersionResult: QueryResult | undefined = await database.query(
      "SHOW server_version",
    );
    const serverVersionValue = serverVersionResult!.rows[0].server_version;

    const maxConnectionsResult: QueryResult | undefined = await database.query(
      "SHOW max_connections",
    );
    const maxConnectionsValue = maxConnectionsResult!.rows[0].max_connections;

    const databaseName = process.env.POSTGRES_DB;
    const openConnectionsResult = await database.query({
      text: "SELECT COUNT(*)::int FROM pg_stat_activity WHERE datname = $1;",
      values: [databaseName],
    });
    const openConnectionValue = openConnectionsResult.rows[0].count;

    response.status(200).json({
      update_at: updateAt,
      dependencies: {
        database: {
          version: serverVersionValue,
          max_connections: parseInt(maxConnectionsValue),
          opened_connections: openConnectionValue,
        },
      },
    });
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "Erro interno no servidor" });
  }
}

type ResponseData = {
  message: string;
  data: IStatus[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  status(req, res);
}
