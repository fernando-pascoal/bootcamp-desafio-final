'use strict'

class Session {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      email: 'required|email',
      password: 'required'
    }
  }

  get messages () {
    return {
      required: 'O campo é obrigatório',
      email: 'O valor informado deve ser um email válido'
    }
  }
}

module.exports = Session
