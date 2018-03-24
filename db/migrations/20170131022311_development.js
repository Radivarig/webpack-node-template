exports.up = async (knex) => {
  const tableExists = await knex.schema.hasTable ("table1")
  if (! tableExists) {
    await knex.schema.createTable ("table1",
      (table) => {
      table.increments ('id').primary ()
      table.string ('text')
      table.json ('data').defaultTo ('{}')
    })
  }
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists ("table1")
}
