const bcrypt = require('bcryptjs');

function hash(password) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}

function compare(password, hash) {
    return bcrypt.compareSync(password, hash); // true
}

module.exports = {
    hash,
    compare
}