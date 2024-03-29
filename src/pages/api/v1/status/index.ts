import database from "src/infra/database";
import { QueryResult } from "pg";
import type { NextApiRequest, NextApiResponse } from "next";

async function status(request: NextApiRequest, response: NextApiResponse) {
  try {
    //@ts-ignore
    request;

    const updateAt: string = new Date().toISOString();

    const firstQueryTimer = performance.now();
    const serverVersionResult: QueryResult | undefined = await database.query(
      "SHOW server_version",
    );
    const serverVersionValue = serverVersionResult!.rows[0].server_version;
    const firstQueryDuration = performance.now() - firstQueryTimer;

    const secondQueryTimer = performance.now();
    const maxConnectionsResult: QueryResult | undefined = await database.query(
      "SHOW max_connections",
    );
    const maxConnectionsValue = maxConnectionsResult!.rows[0].max_connections;
    const secondQueryDuration = performance.now() - secondQueryTimer;

    const thirdQueryTimer = performance.now();
    const databaseName = process.env.POSTGRES_DB;
    const openConnectionsResult = await database.query({
      text: "SELECT COUNT(*)::int FROM pg_stat_activity WHERE datname = $1;",
      values: [databaseName],
    });
    const openConnectionValue = openConnectionsResult.rows[0].count;
    const thirdQueryDuration = performance.now() - thirdQueryTimer;

    response.status(200).json({
      update_at: updateAt,
      dependencies: {
        database: {
          status: "healthy",
          version: serverVersionValue,
          max_connections: parseInt(maxConnectionsValue),
          opened_connections: openConnectionValue,
          latency: {
            first_query: firstQueryDuration.toFixed(0),
            second_query: secondQueryDuration.toFixed(0),
            third_query: thirdQueryDuration.toFixed(0),
          },
        },
        webserver: {
          status: "healthy",
          provider: process.env.PROVIDER,
          environment: process.env.NODE_ENV,
          timezone: process.env.TZ || ":UTC",
          version: process.version,
        },
      },
    });
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "Erro interno no servidor" });
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  status(req, res);
}
