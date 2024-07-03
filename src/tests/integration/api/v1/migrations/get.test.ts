import database from "src/infra/database";
import { MigrationStatus } from "src/pages/api/v1/migrations";
import orchestrator from "src/tests/orchestrator";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await database.query("drop schema public cascade; create schema public;");
});

test("GET to /api/v1/migrations should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.TOKEN}`,
      "Content-Type": "application/json",
    },
  });
  expect(response.status).toEqual(200);

  const result = await response.json();
  expect(result.status).toBe(MigrationStatus.Pending);
  expect(result.message).toBe("Migrations pending...");
});
