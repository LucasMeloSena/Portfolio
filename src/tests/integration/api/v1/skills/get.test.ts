import database from "src/infra/database";
import orchestrator from "src/tests/orchestrator";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await orchestrator.waitForMountedDatabase();
});

test("GET to /api/v1/skills should return 200", async () => {
  const frontendCount = await database.query("SELECT COUNT(*) FROM FRONTEND");
  const backendCount = await database.query("SELECT COUNT(*) FROM BACKEND");
  const devopsCount = await database.query("SELECT COUNT(*) FROM DEVOPS");
  const mobileCount = await database.query("SELECT COUNT(*) FROM MOBILE");
  const databasesCount = await database.query("SELECT COUNT(*) FROM DATABASES");
  const cloudCount = await database.query("SELECT COUNT(*) FROM CLOUD");

  const response = await fetch("http://localhost:3000/api/v1/skills");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.data.frontend.length).toBe(
    parseInt(frontendCount.rows[0].count),
  );
  expect(responseBody.data.backend.length).toBe(
    parseInt(backendCount.rows[0].count),
  );
  expect(responseBody.data.devops.length).toBe(
    parseInt(devopsCount.rows[0].count),
  );
  expect(responseBody.data.mobile.length).toBe(
    parseInt(mobileCount.rows[0].count),
  );
  expect(responseBody.data.databases.length).toBe(
    parseInt(databasesCount.rows[0].count),
  );
  expect(responseBody.data.cloud.length).toBe(
    parseInt(cloudCount.rows[0].count),
  );
});
