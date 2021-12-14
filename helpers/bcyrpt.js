const bcrypt = require('bcryptjs')

function compare(password, hashpassword) {
    return bcrypt.compareSync(password, hashpassword);
  }

module.exports = compare