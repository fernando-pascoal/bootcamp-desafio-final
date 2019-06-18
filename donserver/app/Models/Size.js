'use strict'

const Model = use('Model')
class Size extends Model {
  type () {
    return this.belongsTo('App/Models/Type', 'type_id', 'id')
  }
}

module.exports = Size
