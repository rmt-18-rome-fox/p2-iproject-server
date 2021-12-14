const { User } = require('../models')
const convertPayLoad = require('../helpers/convertPayLoad')


function authentication(req, res, next) {
  try {
    const payLoad = convertPayLoad(req.headers.access_token)
    User.findOne({ where: { email: payLoad.email } })
      .then(data => next())
  } catch (error) {
    next(error)
  }
}

module.exports = { authentication }