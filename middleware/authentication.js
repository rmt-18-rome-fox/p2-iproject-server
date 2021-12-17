const { verifyToken } = require('../helpers/jwt')
const { User } = require('../models')

const authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers
    // console.log(access_token, "<<< authentication");
    if (!access_token) throw { name: 'Unauthorized' }
    const payload = verifyToken(access_token)
    const user = await User.findOne({ where: { email: payload.email } })
    if (!user) throw { name: 'Unauthorized' }
    req.user = {
      id: user.id,
      email: user.email,
    }
    next()
  } catch (err) {
    next(err)
  }
}

module.exports = authentication
