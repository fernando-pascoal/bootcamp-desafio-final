'use strict'

class Size {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      name: 'required',
      type_id: 'required|integer',
      price: 'required|number',
      image: 'required'
    }
  }

  get messages () {
    return {
      required: 'O campo é obrigatório',
      integer: 'Deve ser uma id válida',
      number: 'Deve ser um valor válido'
    }
  }
}

module.exports = Size
