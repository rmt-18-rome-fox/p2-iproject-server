// const { } = require()

class Controller {
  static async welcome(req, res, next) {
    res.send('Welcome to Allhandsondeck by Abdulrachman Hasan.')
  }
  static async addMeeting(req, res, next) {
    res.send('di addMeeting')
  }
  static async getMeetings(req, res, next) {
    res.send('di getMeetings')
  }
}

module.exports = Controller