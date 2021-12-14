const jwt = require("jsonwebtoken");
require("dotenv").config();

function signToken(payload) {
  return jwt.sign(payload, process.env.SECRET_KEY);
}

function decryptToken(token) {
  return jwt.verify(token, process.env.SECRET_KEY);
}

module.exports = { signToken, decryptToken };
