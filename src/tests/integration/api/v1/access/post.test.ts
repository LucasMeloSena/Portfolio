import orchestrator from "src/tests/orchestrator";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
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

  if (responseBody.allow == 0) {
    expect(result.status).toBe(403);
  } else if (responseBody.allow == 1) {
    expect(responseBody.rowCount).toBe(1);
    expect(result.status).toBe(201);
  }
});
