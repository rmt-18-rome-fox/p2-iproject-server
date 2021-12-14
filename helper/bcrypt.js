const bcrypt = require('bcryptjs')

const verifyPassword = (password, passwordInDb) => {

    let hasil = bcrypt.compareSync(password, passwordInDb);
    return hasil
}

module.exports = {verifyPassword}