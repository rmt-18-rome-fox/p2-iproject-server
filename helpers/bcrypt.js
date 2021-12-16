const bcrypt = require('bcryptjs')

const hashPassword = (password) => {
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt)
    return hash
}

const comparePassword = (inputPassword, dataPassword) => {
    return bcrypt.compare(inputPassword, dataPassword)
}

module.exports = {
    hashPassword,
    comparePassword
}
