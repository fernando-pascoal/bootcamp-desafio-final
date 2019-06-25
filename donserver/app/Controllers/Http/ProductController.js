'use strict'

const Product = use('App/Models/Product')

class ProductController {
  async index ({ response }) {
    try {
      const products = await Product.query()
        .with('types.sizes.type.product')
        .fetch()
      return products
    } catch (error) {
      return response.status(error.status).send({
        error: true,
        message: 'Problemas ao tentar obter os produtos'
      })
    }
  }
  async store ({ request, response }) {
    const data = request.only(['name', 'image', 'description', 'delivery'])
    try {
      const product = await Product.create(data)
      return product
    } catch (error) {
      if (!error.status) error.status = 500
      return response.status(error.status).send({
        error: true,
        message: 'Problemas ao tentar salvar um novo produto'
      })
    }
  }
  async update ({ params, request, response }) {
    const data = request.only(['name', 'image', 'description', 'delivery'])
    try {
      const product = await Product.findOrFail(params.id)
      product.merge(data)
      await product.save()
      return product
    } catch (error) {
      if (!error.status) error.status = 500
      return response.status(error.status).send({
        error: true,
        message: 'Problemas ao tentar atualizar um tipo'
      })
    }
  }
  async destroy ({ params, response }) {
    try {
      const product = await Product.findOrFail(params.id)
      return product.delete()
    } catch (error) {
      if (!error.status) error.status = 500
      return response.status(error.status).send({
        error: true,
        message: 'Problemas ao tentar deletar tipo'
      })
    }
  }
}

module.exports = ProductController
