'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SizeSchema extends Schema {
  up () {
    this.create('sizes', table => {
      table.increments()
      table.string('name').notNullable()
      table.string('image').notNullable()
      table
        .integer('type_id')
        .unsigned()
        .references('id')
        .inTable('types')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.float('price', 2)
      table.timestamps()
    })
  }

  down () {
    this.drop('sizes')
  }
}

module.exports = SizeSchema
