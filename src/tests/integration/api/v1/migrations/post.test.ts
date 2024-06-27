import database from "src/infra/database";
import { MigrationStatus } from "src/pages/api/v1/migrations";
import orchestrator from "src/tests/orchestrator";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await database.query("drop schema public cascade; create schema public;");
});

test("POST to /api/v1/migrations should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
    headers: {
      'Authorization': `Bearer ${process.env.TOKEN}`,
      'Content-Type': 'application/json'
    }
  })
  expect(response.status).toEqual(200)

  const result = await response.json()
  expect(result.status).toEqual(MigrationStatus.Applied)

  const response2 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
    headers: {
      'Authorization': `Bearer ${process.env.TOKEN}`,
      'Content-Type': 'application/json'
    }
  })
  expect(response2.status).toEqual(200)

  const result2 = await response2.json()
  expect(result2.status).toEqual(MigrationStatus.Ok)
})