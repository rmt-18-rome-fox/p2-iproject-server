const {User} = require('../models/index')
const {comparePassword} = require('../helpers/bcrypt')
const {signToken} = require('../helpers/jwt')

const register = async(req, res, next) => {
  try {
    const {password, email, fullName} = req.body
    await User.create({email, password, fullName})
    res.status(201).json({email, fullName})
  } catch (err) {
    next(err)
  }
}

const login = async (req, res, next) => {
  try {
    const {email, password} = req.body
    if(!email) throw {name: 'Email not found'}
    if(!password) throw {name: 'Password not found'}
    const user = await User.findOne({where: {email}})
    if(!user) throw {name: "Unauthorized Login"}
    const isValidPassword = comparePassword(password, user.password)
    if(!isValidPassword) throw {name: "Unauthorized Login"}
    const payload = {
      id: user.id
    }
    const access_token = signToken(payload)
    res.status(200).json({access_token: access_token})
  } catch (err) {
    next(err)
  }
}


module.exports = {register, login}