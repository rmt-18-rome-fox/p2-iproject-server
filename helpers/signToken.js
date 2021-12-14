const jwt = require("jsonwebtoken");
const secretkey = process.env.SECRETKEY;

signToken = (x) => {
  return jwt.sign(x, secretkey);
};

module.exports = signToken;
