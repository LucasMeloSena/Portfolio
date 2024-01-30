test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const result = await response.json();

  const updateAt = new Date(result.update_at).toISOString();
  expect(updateAt).toBe(result.update_at);
  expect(result.dependencies.database.version).toBe("16.1");
  expect(result.dependencies.database.max_connections).toBe(100);
  expect(result.dependencies.database.opened_connections).toBe(3);
});

test("GET to /api/v1/education should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/education");
  expect(response.status).toBe(200);
});

test("GET to /api/v1/experience should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/experience");
  expect(response.status).toBe(200);
});
