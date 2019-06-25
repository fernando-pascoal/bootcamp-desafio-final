'use strict'

class Type {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      name: 'required',
      image: 'required'
    }
  }

  get messages () {
    return {
      required: 'O campo é obrigatório'
    }
  }
}

module.exports = Type
