const api: Object = {}
const knex = require ("../db/knex.js")

api.handleRequest = async (req, res) => {
  const rb = req.body

  // eslint-disable-next-line no-console
  console.log ("request body: ", rb)
  const r = await api.getResult (req.body)
  res.send ({ "response": r, "requestBody": rb })
}

// eslint-disable-next-line no-console
api.getResult = async (where) => {
  console.log ("getResult", where)
  return await knex.select ("*").from ("table1").where (where)
    .then (async (res) => res[0])
}
export default api
