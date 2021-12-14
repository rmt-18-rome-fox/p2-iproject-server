const bcrypt = require('bcryptjs')

const hashPassword = (plain) => {
  return bcrypt.hashSync(plain, 10)
}

const comparePassword = (plain, hash) => {
  return bcrypt.compareSync(plain, hash)
}

module.exports = { hashPassword, comparePassword }