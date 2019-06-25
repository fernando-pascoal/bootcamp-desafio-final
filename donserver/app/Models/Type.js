'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Env = use('Env')

class Type extends Model {
  static get computed () {
    return ['url']
  }
  // eslint-disable-next-line camelcase
  getUrl ({ image }) {
    // return `http://10.0.3.2:3333/images/${image}`
    return `${Env.get('APP_URL')}/images/${image}`
  }
  product () {
    return this.belongsTo('App/Models/Product', 'product_id', 'id')
  }

  sizes () {
    return this.hasMany('App/Models/Size')
  }
}

module.exports = Type
