process.env.NODE_ENV = 'test'

import chai, { expect } from "chai"
import chaiHttp from "chai-http"
import app from "../src/app.js"

chai.use (chaiHttp)

const knex = require('../db/knex.js')

// reset databases before and after each test
beforeEach(async () =>
  await knex.migrate.rollback()
  .then(() => knex.migrate.latest())
  .then(() => knex.seed.run())
)
afterEach(async () => await knex.migrate.rollback())

describe('API', () => {

  it ("POST request to / should return 200", async () => {
    const res = await chai.request (app.listen ())
      .post ("/")

    expect (res.statusCode).to.equal (200)
  })


  describe('setData', () => {
    it('should insert passed object to table1', async () => {

      const toInsert = {
        text: "custom text",
        data: {custom: "data"},
      }

      await knex ("table1").insert (toInsert)
      const { data } =
        (await knex.select ("data")
        .from ("table1")
        .where ({text: toInsert.text})
        )[0]
   
      expect (data).to.be.an('object')

      // json equality
      expect (JSON.stringify(data)).to.equal(JSON.stringify(toInsert.data))
    })
  })

})
