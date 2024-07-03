import database from "src/infra/database";
import orchestrator from "src/tests/orchestrator";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await orchestrator.waitForMountedDatabase()
});

test("GET to /api/v1/education should return 200", async () => {
  const educationCount = await database.query("SELECT COUNT(*) FROM EDUCATION");

  const response = await fetch("http://localhost:3000/api/v1/education");
  expect(response.status).toBe(200);
  const responseBody = await response.json();
  expect(responseBody.data.length).toBe(parseInt(educationCount.rows[0].count));
});
