const bcrypt = require('bcrypt')

const encrypt = (value) => {
  return bcrypt.hashSync(value, bcrypt.genSaltSync(5))
}

const compare = (password, encryptedPassword) => {
  return bcrypt.compareSync(password, encryptedPassword)
}

module.exports = { encrypt, compare }