import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'eventos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome').notNullable()
      table.string('descricao').notNullable()
      table.dateTime('data_inicio').notNullable()
      table.dateTime('data_final').notNullable()
      table.string('local').notNullable()
      table
        .integer('id_organizador')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('participantes')
        .onDelete('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
