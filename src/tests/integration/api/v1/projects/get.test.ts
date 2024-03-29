import database from "src/infra/database";

test("GET to /api/v1/projects should return 200", async () => {
  const projectsCount = await database.query("SELECT COUNT(*) FROM PROJECTS");

  const response = await fetch("http://localhost:3000/api/v1/projects");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.data.projects.length).toBe(
    parseInt(projectsCount.rows[0].count),
  );
});
