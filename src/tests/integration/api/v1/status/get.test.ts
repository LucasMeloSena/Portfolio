import orchestrator from "src/tests/orchestrator";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await orchestrator.waitForMountedDatabase()
});

test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const result = await response.json();

  const updateAt = new Date(result.update_at).toISOString();
  expect(updateAt).toBe(result.update_at);
  expect(result.dependencies.database.version).toBe("16.3");
  expect(result.dependencies.database.max_connections).toBe(100);
});
