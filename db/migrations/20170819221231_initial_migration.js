exports.up = async (knex) => {
  await knex.schema.createTableIfNotExists ("table", (table) => {
    table.increments ('id').primary()
    table.string ('description')
    // table.json ('').defaultTo ('{}')
  })

}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists ("table")
}
