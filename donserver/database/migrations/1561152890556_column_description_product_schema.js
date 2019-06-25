'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ColumnDescriptionProductSchema extends Schema {
  up () {
    this.table('products', table => {
      table.string('description')
      table.string('delivery')
    })
  }

  down () {
    this.table('products', table => {
      table.dropColumn('description')
      table.dropColumn('delivery')
    })
  }
}

module.exports = ColumnDescriptionProductSchema
