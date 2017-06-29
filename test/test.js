import chai, { expect } from "chai"
import chaiHttp from "chai-http"

import app from "../src/app.js"

chai.use (chaiHttp)

describe ("test example", () => {
  it ("POST request to / should return 200", async () => {
    const res = await chai.request (app.listen ())
      .post ("/")

    expect (res.statusCode).to.equal (200)
  })
})
