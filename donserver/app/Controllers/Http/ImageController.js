'use strict'

const Helpers = use('Helpers')

class ImageController {
  async show ({ request, response, params }) {
    try {
      return response.download(Helpers.tmpPath(`uploads/${params.name}`))
    } catch (error) {
      if (!error.status) error.status = 500
      return response
        .status(error.status)
        .send({ error: { message: 'Problemas ao tentar obter o arquivo' } })
    }
  }
}

module.exports = ImageController
