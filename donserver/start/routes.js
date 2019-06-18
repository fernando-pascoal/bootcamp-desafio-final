'use strict'

const Route = use('Route')

Route.post('user', 'UserController.store').validator('User')
Route.post('session', 'SessionController.store').validator('Session')
Route.post('checksession', 'SessionController.check').middleware(['auth'])
Route.get('images/:name', 'ImageController.show')

Route.resource('sizes', 'SizeController')
  .middleware(['auth'])
  .validator(
    new Map([[['sizes.store'], ['Size']], [['sizes.update'], ['Size']]])
  )

Route.resource('types', 'TypeController')
  .middleware(['auth'])
  .validator(
    new Map([[['types.store'], ['Type']], [['types.update'], ['Type']]])
  )

Route.resource('products', 'ProductController')
  .middleware(['auth'])
  .validator(
    new Map([
      [['products.store'], ['OnlyName']],
      [['products.update'], ['OnlyName']]
    ])
  )

Route.resource('orders', 'OrderController')
  .middleware(['auth'])
  .validator(
    new Map([[['orders.store'], ['Order']], [['orders.update'], ['Order']]])
  )

Route.get('*', () => {
  return 'nothing'
})
