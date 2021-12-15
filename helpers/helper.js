const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const KEY = 'key'

const hashPassword = password => {
  return bcrypt.hashSync(password, 10)
}

const comparePassword = (password, hash) => {
  return bcrypt.compareSync(password, hash)
}

const generateToken = token => {
  return jwt.sign(token, KEY)
}

const verifyToken = token => {
  return jwt.verify(token, KEY)
}

module.exports = {
  hashPassword,
  comparePassword,
  generateToken,
  verifyToken
}