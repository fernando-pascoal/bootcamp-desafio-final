'use strict'

const Env = use('Env')
const Model = use('Model')

class Size extends Model {
  static get computed () {
    return ['url']
  }
  // eslint-disable-next-line camelcase
  getUrl ({ image }) {
    // return `http://10.0.3.2:3333/images/${image}`
    return `${Env.get('APP_URL')}/images/${image}`
  }
  type () {
    return this.belongsTo('App/Models/Type', 'type_id', 'id')
  }
}

module.exports = Size
