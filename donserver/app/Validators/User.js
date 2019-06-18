'use strict'

class User {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      username: 'required|unique:users',
      email: 'required|unique:users',
      password: 'required|confirmed'
    }
  }

  get messages () {
    return {
      require: 'O campo é obrigatório',
      unique: 'O valor informado ja existe em nosso banco de dados',
      confirmed: 'As senhas não são iguais'
    }
  }
}

module.exports = User
