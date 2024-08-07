import orchestrator from "src/tests/orchestrator";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await orchestrator.waitForMountedDatabase();
});

test("GET to /api/v1/files should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/files");
  expect(response.status).toBe(200);
});
