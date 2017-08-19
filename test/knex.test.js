process.env.NODE_ENV = 'test'

const chai = require ('chai')
const expect = chai.expect
const chaiHttp = require ('chai-http')
chai.use (chaiHttp)

const knex = require ('../db/knex.js')

// reset databases before and after each test
beforeEach (async () =>
  await knex.migrate.rollback ()
  .then (() => knex.migrate.latest ())
  .then (() => knex.seed.run ())
)
afterEach (async () => await knex.migrate.rollback ())

describe ('API', async () => {
  it ('method', async () => {
    expect (false).to.not.equal (true)
  })

})
