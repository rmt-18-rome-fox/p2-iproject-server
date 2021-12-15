const bcrypt = require("bcrypt");

const hash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

const compare = (password, hashedPass) => {
  return bcrypt.compareSync(password, hashedPass);
};

module.exports = { hash, compare };
