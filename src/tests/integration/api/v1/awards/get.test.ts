import database from "src/infra/database";
import orchestrator from "src/tests/orchestrator";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await orchestrator.waitForMountedDatabase()
});

test("GET to /api/v1/awards should return 200", async () => {
  const awardsCount = await database.query("SELECT COUNT(*) FROM AWARDS");

  const response = await fetch("http://localhost:3000/api/v1/awards");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.data.awards.length).toBe(
    parseInt(awardsCount.rows[0].count),
  );
});
