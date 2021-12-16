const {User} = require('../models/index')
const {verifyToken} = require('../helpers/jwt')

const authentication = async (req, res, next) => {
  try {
    const {access_token} = req.headers;
    console.log({access_token});
    if(!access_token) throw {name: "Unauthorized Middleware"}
    const payload = verifyToken(access_token)
    if(!payload) throw {name: "Unauthorized Middleware"}
    const user = await User.findOne({where: {id: payload.id}})
    req.user = {
      id: user.id
    }
    next()
  } catch (err) {
    next(err)
  }
}

module.exports = authentication