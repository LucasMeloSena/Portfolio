import database from "src/infra/database";

test("GET to /api/v1/certificates should return 200", async () => {
  const certificatesCount = await database.query(
    "SELECT COUNT(*) FROM CERTIFICATES",
  );

  const response = await fetch("http://localhost:3000/api/v1/certificates");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.data.certificates.length).toBe(
    parseInt(certificatesCount.rows[0].count),
  );
});
