const { User } = require('../models')
const { comparePassword } = require('../helper/bcryipt')
const { createToken } = require('../helper/jwt')

class UserController {
  static async register (req, res, next) {
    const { email, password } = req.body
    
    try {
      const data = await User.create({
        email, 
        password
      })

      res.status(201).json({
        id: data.id,
        email: data.email
      })
    } catch (error) {
      next(error)
    }
  }
  static async login (req, res, next) {
    const { email, password } = req.body

    try {
      if ( !email ) throw { name: "INVALID"}
      if ( !password ) throw { name: "INVALID"}

      const data = await User.findOne({
        where: {
          email
        }
      })
      if ( !email ) throw { name: "INVALID" }
      
      const checkPass = comparePassword(password, data.password)
      if ( !checkPass ) throw { name: "INVALID" }

      const payload = {
        email: data.email,
        id: data.id
      }
      const access_token = createToken(payload)

      res.status(200).json({
        access_token
      })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = UserController