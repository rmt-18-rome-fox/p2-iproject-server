const bcrypt = require("bcryptjs");

function hash(password) {
  const salt = bcrypt.genSaltSync(8);
  return bcrypt.hashSync(password, salt);
}

function decryptPassword(password, hashedPassword) {
  return bcrypt.compareSync(password, hashedPassword);
}

module.exports = {
  hash,
  decryptPassword,
};
