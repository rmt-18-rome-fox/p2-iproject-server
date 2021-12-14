const {User, WatchList} = require('../models/index')
const {comparePassword} = require('../helpers/bcrypt')
const {signToken} = require('../helpers/jwt')

const register = async(req, res, next) => {
  try {
    const {username, password, email, fullName, age} = req.body
    // console.log({username, password, email, fullName, age});
    const user = await User.create({username, password, email, fullName, age})
    res.status(201).json(user)
  } catch (err) {
    next(err)
  }
}

const login = async (req, res, next) => {
  try {
    const {username, password} = req.body
    // console.log({username, password});
    if(!username) throw {name: 'Username not found'}
    if(!password) throw {name: 'Password not found'}
    const user = await User.findOne({where: {username}})
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