exports.up = async (knex) => {
  await knex.schema.createTableIfNotExists ("table1", (table) => {
    table.increments ('id').primary ()
    table.string ('text')
    table.json ('data').defaultTo ('{}')
  })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists ("table1")
}
