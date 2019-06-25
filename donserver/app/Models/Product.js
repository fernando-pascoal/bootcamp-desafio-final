'use strict'

const Env = use('Env')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
  static get computed () {
    return ['url']
  }
  // eslint-disable-next-line camelcase
  getUrl ({ image }) {
    // return `http://10.0.3.2:3333/images/${image}`
    return `${Env.get('APP_URL')}/images/${image}`
  }

  types () {
    return this.hasMany('App/Models/Type')
  }
}

module.exports = Product
