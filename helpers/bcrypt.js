const bcrypt = require('bcrypt');

const hashPassword = (plaintext) => {
    return bcrypt.hashSync(plaintext, 8);
};

const compare = (plaintext, hashPassword) => {
    return bcrypt.compareSync(plaintext, hashPassword);
};

module.exports = {
    hashPassword,
    compare
};