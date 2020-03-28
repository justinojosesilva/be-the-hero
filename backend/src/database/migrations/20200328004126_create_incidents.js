
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        //Cria ids incrementados
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        //Coluna para referenciar o id da tabela ongs
        table.string('ong_id').notNullable();
        //criando uma chave estrangeira
        table.foreign('ong_id').references('id').inTable('ongs');
      });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
