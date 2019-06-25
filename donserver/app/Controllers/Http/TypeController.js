'use strict'

const Type = use('App/Models/Type')
const Product = use('App/Models/Product')

class TypeController {
  async index ({ response }) {
    try {
      const types = await Type.query()
        .with('sizes')
        .fetch()
      return types
    } catch (error) {
      if (!error.status) error.status = 500
      return response.status(error.status).send({
        error: true,
        message: 'Problemas ao tentar obter os tipos'
      })
    }
  }
  async store ({ request, response }) {
    const data = request.only(['name', 'image', 'product_id'])
    try {
      await Product.findOrFail(data.product_id)
      const type = await Type.create(data)
      return type
    } catch (error) {
      if (!error.status) error.status = 500
      return response.status(error.status).send({
        error: true,
        message: 'Problemas ao tentar salvar um novo tipo'
      })
    }
  }
  async update ({ params, request, response }) {
    const data = request.only(['name', 'image', 'product_id'])
    try {
      await Product.findOrFail(data.product_id)
      const type = await Type.findOrFail(params.id)
      type.merge(data)
      await type.save()
      return type
    } catch (error) {
      console.log(error)
      if (!error.status) error.status = 500
      return response.status(error.status).send({
        error: true,
        message: 'Problemas ao tentar atualizar um tipo'
      })
    }
  }
  async destroy ({ params, response }) {
    try {
      const type = await Type.findOrFail(params.id)
      return type.delete()
    } catch (error) {
      if (!error.status) error.status = 500
      return response.status(error.status).send({
        error: true,
        message: 'Problemas ao tentar deletar tipo'
      })
    }
  }
}

module.exports = TypeController
