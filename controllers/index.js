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
          created
        })
      } else {
        throw { name: 'CreateMeetingFailed' }
      }
    } catch (error) {
      next(error)
    }
  }
  static async getMeetings(req, res, next) {
    res.send('di getMeetings')
    console.log(req.body)
  }
}

module.exports = Controller