'use strict'

const Order = use('App/Models/Order')
const Database = use('Database')
const Size = use('App/Models/Size')

class OrderController {
  async index ({ request, response, auth }) {
    const { user } = auth
    const page = request.input('page')
    const params = { type: '=', val: user.id }
    if (user.admin) {
      params.type = '>'
      params.val = 0
    }
    try {
      const orders = await Order.query()
        .where('user_id', params.type, params.val)
        .with('items.size.type')
        .with('user')
        .orderBy('updated_at', 'desc')
        .paginate(page || 1, 2)
      return orders
    } catch (error) {
      if (!error.status) error.status = 500
      return response.status(error.status).send({
        error: true,
        message: 'Problemas ao tentar obter os produtos'
      })
    }
  }
  async store ({ request, response, auth }) {
    // order: user_id, total
    // items: order_id, size_id
    const { user } = auth
    const data = request.only(['items', 'remarks', 'address'])
    try {
      const trx = await Database.beginTransaction()
      const order = await Order.create(
        { user_id: user.id, remarks: data.remarks },
        trx
      )
      let items = []
      await data.items.forEach(item => {
        for (let index = 0; index < item.count; index++) {
          items.push({ size_id: item.id })
        }
      })
      await order.items().createMany(items, trx)
      await order.address().create(data.address, trx)
      await trx.commit()
      const total = await Size.query()
        .sum('price')
        .innerJoin('items_orders', 'sizes.id', '=', 'items_orders.size_id')
        .where('order_id', order.id)
      order.total = total[0].sum
      await order.save()

      return order
    } catch (error) {
      console.log(error)
      if (!error.status) error.status = 500
      return response.status(error.status).send({
        error: true,
        message: 'Problemas ao tentar salvar os produtos'
      })
    }
  }
  async show ({ params, response }) {
    try {
      const order = await Order.query()
        .with('user')
        .with('items.size')
        .where('id', params.id)
        .fetch()
      return order
    } catch (error) {
      if (!error.status) error.status = 500
      return response.status(error.status).send({
        error: true,
        message: 'Problemas ao tentar recuperar o produto'
      })
    }
  }

  async destroy ({ params, response }) {
    try {
      const order = await Order.findOrFail(params.id)
      return await order.delete()
    } catch (error) {
      if (!error.status) error.status = 500
      return response.status(error.status).send({
        error: true,
        message: 'Problemas ao tentar deletar um pedido'
      })
    }
  }
}

module.exports = OrderController
