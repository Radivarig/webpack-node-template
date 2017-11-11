exports.seed = (knex, Promise) => {
  const tableName = 'table1'
  return knex(tableName).del()
  //.then(() => knex(tableName).insert({email: 'testuser@test.com'}))
}
