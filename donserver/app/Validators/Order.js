'use strict'

class Order {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      items: 'required',
      'items.*.size_id': 'required|integer'
    }
  }

  get messages () {
    return {
      integer: 'É necessário um identificador correto do item',
      required: 'É obrigatório informar os itens da compra'
    }
  }
}

module.exports = Order
