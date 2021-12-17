const { Meeting } = require('../models')
const uploadImage = require('../helpers/imageKit')

class Controller {
  static async welcome(req, res, next) {
    res.send('Welcome to Allhandsondeck by Abdulrachman Hasan.')
  }
  static async addMeeting(req, res, next) {
    try {
      // ambil input dari req.body
      const { identifier, messages, image } = req.body

      // pakai if biar masuk ke Sequelize error bukan image undefined
      let uploaded = ""
      if (image) {
        uploaded = await uploadImage(image, identifier)
        // cek jumlah key di obj, klo gk 2 berarti error
        // di helper ImageKit, kalau berhasil kita return obj 2 keys
        if (Object.keys(uploaded).length !== 2) {
          throw {
            name: 'image upload failed',
            messageImageKit: uploaded.response.data.message
          }
        }
      }
    
      // construct obj untuk input sq
      const input = {
        identifier,
        messages: JSON.stringify(messages),
        imageUrl: uploaded.url,
        createdAt: new Date(),
        updatedAt: new Date()
      }

      const created = await Meeting.create(input)

      if (created) {
        res.status(201).json({
          message: 'Success post meeting',
          link: `${process.env.BASE_URL}/meetings/${identifier}`
        })
      } else {
        throw { name: 'CreateMeetingFailed' }
      }
    } catch (error) {
      next(error)
    }
  }
  static async getMeetings(req, res, next) {
    try {
      const { identifier } = req.params
      if (!identifier) throw { name: 'BadRequest' }
      const meetings = await Meeting.findAll({
        where: {
          identifier
        }
      })

      if (meetings) {
        res.status(200).json(meetings)
      } else {
        throw { name: 'GetMeetingsFailed' }
      }
    } catch (error) {
      next(error)
    }
  }
}

module.exports = Controller