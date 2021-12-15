const { verifyToken } = require('../helper/jwt')
const { User, Post } = require('../models')

const postAuthorization = async (req, res, next) => {
  const { id: UserId } = req.auth
  const { id } = req.params

  try {
    const cekPost = await Post.findOne({
      where: {
        id
      }
    }) 
    if ( !cekPost ) throw { name: "NOT_FOUND" }

    const cekOwner = await Post.findOne({
      where: {
        id, 
        UserId
      }
    })
    if ( !cekOwner ) throw { name: "FORBIDDEN" }

    next()
  } catch (error) {
    next(error)
  }
}

const organizationAuthor = async (req, res, next) => {

}

module.exports = { postAuthorization, organizationAuthor }