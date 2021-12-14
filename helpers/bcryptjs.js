const bcrypt = require("bcryptjs");

function hash(value) {
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(value, salt);
  return hash;
}

function compare(password, hash) {
  return bcrypt.compareSync(password, hash);
}

module.exports = { hash, compare };
