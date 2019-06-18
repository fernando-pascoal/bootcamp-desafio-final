'use strict'

const Model = use('Model')
const moment = require('moment')

class Order extends Model {
  static get computed () {
    return ['moment']
  }
  // eslint-disable-next-line camelcase
  getMoment ({ updated_at }) {
    moment.locale('pt')
    return moment(updated_at).fromNow()
  }

  items () {
    return this.hasMany('App/Models/ItemsOrder')
  }
  user () {
    return this.belongsTo('App/Models/User', 'user_id', 'id')
  }
}

module.exports = Order
