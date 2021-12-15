const { verifyToken } = require('../helper/jwt')
const { User, Post } = require('../models')

const postAuthorization = async (req, res, next) => {
  const { id: UserId } = req.auth
  const { id } = req.params

  try {
    const cekPostOwner = await Post.findOne({
      where: {
        id,
        UserId
      }
    }) 
    if ( !cekPostOwner ) throw { name: "FORBIDDEN" }

    next()
  } catch (error) {
    next(error)
  }
}

module.exports = { postAuthorization }