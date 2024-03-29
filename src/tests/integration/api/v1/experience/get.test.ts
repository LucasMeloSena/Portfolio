import database from "src/infra/database";

test("GET to /api/v1/experience should return 200", async () => {
  const experienceCount = await database.query(
    "SELECT COUNT(*) FROM EXPERIENCE",
  );

  const response = await fetch("http://localhost:3000/api/v1/experience");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.data.length).toBe(
    parseInt(experienceCount.rows[0].count),
  );
});
