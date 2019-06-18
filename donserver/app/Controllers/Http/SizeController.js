'use strict'

const Size = use('App/Models/Size')
const Type = use('App/Models/Type')

class SizeController {
  async index ({ response }) {
    try {
      const sizes = await Size.query()
        .with('type')
        .fetch()
      return sizes
    } catch (error) {
      console.log(error)
      if (!error.status) error.status = 500
      return response.status(error.status).send({
        error: true,
        message: 'Problemas ao tentar obter todos os tamanhos'
      })
    }
  }
  async store ({ request, response }) {
    const data = request.only(['name', 'type_id', 'price', 'image'])
    try {
      // Esse recurso foi utilizado pq não consegui validar com 'exists:types,id' no validator
      await Type.findOrFail(data.type_id)

      const size = await Size.create(data)
      return size
    } catch (error) {
      if (!error.status) error.status = 500
      return response.status(error.status).send({
        error: true,
        message: 'Problemas ao tentar criar um novo tamanho'
      })
    }
  }
  async update ({ params, request, response }) {
    const data = request.only(['name', 'type_id', 'price', 'image'])
    try {
      await Type.findOrFail(data.type_id)

      const size = await Size.findOrFail(params.id)
      size.merge(data)
      await size.save()
      return size
    } catch (error) {
      if (!error.status) error.status = 500
      return response.status(error.status).send({
        error: true,
        message: 'Problemas ao tentar atualizar um tamanho'
      })
    }
  }

  async destroy ({ params, response }) {
    try {
      const size = await Size.findOrFail(params.id)
      return await size.delete()
    } catch (error) {
      if (!error.status) error.status = 500
      return response.status(error.status).send({
        error: true,
        message: 'Problemas ao tentar deletar um tamanho'
      })
    }
  }
}

module.exports = SizeController
