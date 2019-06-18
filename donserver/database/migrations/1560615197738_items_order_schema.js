'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ItemsOrderSchema extends Schema {
  up () {
    this.create('items_orders', table => {
      table.increments()
      table
        .integer('order_id')
        .unsigned()
        .references('id')
        .inTable('orders')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('size_id')
        .unsigned()
        .references('id')
        .inTable('sizes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('items_orders')
  }
}

module.exports = ItemsOrderSchema
