'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Address extends Model {
  order () {
    return this.belongsTo('App/Models/Order', 'order_id', 'id')
  }
}

module.exports = Address
