test("GET to /api/v1/status should retun 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  //console.log(response.status);
  expect(response.status).toBe(200);
});
