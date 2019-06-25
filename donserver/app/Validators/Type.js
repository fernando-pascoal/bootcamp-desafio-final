'use strict'

class Type {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      name: 'required',
      image: 'required',
      product_id: 'required|integer'
    }
  }

  get messages () {
    return {
      required: 'O campo é obrigatório',
      integer: 'Deve ser uma id válida'
    }
  }
}

module.exports = Type
