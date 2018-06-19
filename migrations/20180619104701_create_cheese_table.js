
exports.up = function(knex, Promise) {
    knex.schema.createTable('cheeses', (table) => {
        table.increments()
        table.string('name')
        table.string('description')
      })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('cheeses')
};
