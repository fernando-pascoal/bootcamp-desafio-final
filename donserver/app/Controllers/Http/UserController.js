'use strict'

const User = use('App/Models/User')

class UserController {
  async store ({ request, response }) {
    const data = request.only(['username', 'email', 'password', 'origin'])
    try {
      const user = await User.create(data)
      return user
    } catch (error) {
      return response.status(error.status).send({
        ...error,
        error: true,
        message: 'Algum problema aconteceu'
      })
    }
  }
}

module.exports = UserController
