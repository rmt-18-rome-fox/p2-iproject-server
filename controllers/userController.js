const { hashPassword, comparePassword, generateToken, verifyToken } = require('../helpers/helper')
const { User } = require('../models')

class UserController {
  static async register (req, res, next) {
    const { email, password, username, address } = req.body
    const objRegister = { email, password, username, address, role:"free" }
    try {
      
      const newUser = await User.create(objRegister)
       res.status(201).json({
        id: newUser.id,
        email: newUser.email,
        username: newUser.username,
        address: newUser.address,
        role: newUser.role
      })
      
    } catch (err) {
      next(err)
    }
  }
  static async login (req, res, next) {
    const { email, password } = req.body
    try {

      if(!email) {
        throw {name:'EMAIL_REQUIRED'}
      }

      if(!password) {
        throw {name:'PASSWORD_REQUIRED'}
      }

      const userIsFound = await User.findOne({
        where: { email }
      })

      if(!userIsFound) {
        throw { name: "INVALID_USER" }
      }

      if(!comparePassword(password, userIsFound.password)) {
        throw { name: "INVALID_USER" }
      }

      const newToken = generateToken({
        id: userIsFound.id,
        email: userIsFound.email,
        role: userIsFound.role
      })

      res.status(200).json({ access_token: newToken })
    } catch (err) {
      next(err)
    }
  }

}

module.exports = UserController