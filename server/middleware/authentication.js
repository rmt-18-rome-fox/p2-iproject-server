const { verify } = require("../helper/formatter")
const {User} = require("../models")

const authentication = async (req,res,next) => {
  try {
    const {access_token} = req.headers
    if(!access_token) { next({name: 'no_access_token'})}
    const payload = verify(access_token)
    const found = await User.findOne({
      where : {email: payload.email}
    })
    if (!found) {
      next ({name: "JsonWebTokenError"})
    }
    req.user = payload
    next()
  } catch (err) {
    next()
  }
}

module.exports = authentication