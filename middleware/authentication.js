const { verifyToken } = require('../helper/jwt')
const { User } = require('../models')

const authentication = async (req, res, next) => {
  const { access_token } = req.headers

  try {
    const verify = verifyToken(access_token)
    if ( !verify ) throw { name: "NOT_AUTHORIZE" }

    const cekUser = await User.findOne({
      where: {
        email: verify.email
      }
    })
    if ( !cekUser ) throw { name: "NOT_AUTHORIZE" }

    req.auth = {
      id: cekUser.id,
      email: cekUser.email
    }
    next()
  } catch (error) {
    next(error)
  }
}

module.exports = authentication