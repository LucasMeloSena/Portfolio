import orchestrator from "src/tests/orchestrator";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await orchestrator.waitForMountedDatabase();
});

test("GET to /api/v1/total-access should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/total-access");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.data.result.length).toBe(12);
});
