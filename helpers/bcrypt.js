const bcrypt = require('bcryptjs')

const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(10)
  return bcrypt.hashSync(password, salt)
}

const comparePassword = (newPass, oldPass) => bcrypt.compareSync(newPass, oldPass)

module.exports = {hashPassword, comparePassword}