'use strict'

const User = use('App/Models/User')

class SessionController {
  async store ({ request, response, auth }) {
    const { email, password } = request.all()
    try {
      const { token } = await auth.attempt(email, password)
      if (token) {
        const { username, admin } = await User.findBy('email', email)
        return { username, admin, token }
      }
    } catch (error) {
      let message = 'Problemas ao tentar logar o usuário'
      if (!error.status) error.status = 500
      if (error.status === 401) message = 'Usuário ou senha inválidos'
      return response.status(error.status).send({
        error: true,
        message
      })
    }
  }
  async check ({ response, auth }) {
    try {
      return await auth.check()
    } catch (error) {
      return response.status(401).send({
        error: true,
        message: 'Usuário não autorizado'
      })
    }
  }
}

module.exports = SessionController
