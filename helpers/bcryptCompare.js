const bcrypt = require('bcrypt')

function bcryptCompare (password, hashedPassword) {
    return bcrypt.compareSync(password, hashedPassword)
}

module.exports = bcryptCompare