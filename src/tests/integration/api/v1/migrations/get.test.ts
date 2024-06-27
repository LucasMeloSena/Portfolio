import orchestrator from "src/tests/orchestrator";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
});

test("GET to /api/v1/migrations should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "GET",
    headers: {
      'Authorization': `Bearer ${process.env.TOKEN}`,
      'Content-Type': 'application/json'
    }
  })
  expect(response.status).toEqual(200)
})