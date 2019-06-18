'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Type extends Model {
  sizes () {
    return this.hasMany('App/Models/Size')
  }
}

module.exports = Type
