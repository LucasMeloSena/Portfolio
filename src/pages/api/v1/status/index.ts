import database from "src/infra/database";
import { QueryResult } from "pg";

async function status(response: any) {
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
}

export default status;
