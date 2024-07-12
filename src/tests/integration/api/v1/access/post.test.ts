import orchestrator from "src/tests/orchestrator";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await orchestrator.waitForMountedDatabase();
});

test("POST to /api/v1/access should return 200", async () => {
  const url = "http://localhost:3000/api/v1/access";
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-real-ip": "127.0.0.1",
    },
  };

  const result = await fetch(url, requestOptions);
  const responseBody = await result.json();

  expect(result.status).toBe(responseBody.allow === 0 ? 403 : 201);
  expect(responseBody.rowCount).toBe(responseBody.allow == 1 ? 1 : 0);
});
