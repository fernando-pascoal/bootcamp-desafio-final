'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddressSchema extends Schema {
  up () {
    this.create('addresses', table => {
      table.increments()
      table.string('cep').notNullable()
      table.string('numero').notNullable()
      table.string('logradouro').notNullable()
      table.string('bairro').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('addresses')
  }
}

module.exports = AddressSchema
