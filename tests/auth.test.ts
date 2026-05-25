// tests/auth.test.ts
import request from "supertest";
import app from "../src/app";

describe("Auth", () => {
  it("register user", async () => {
    const res = await request(app)
      .post("/api/v1/auth/register")
      .send({
        name: "Test",
        email: "test@test.com",
        password: "123456"
      });

    expect(res.statusCode).toBe(201);
  });
});