const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_KEY;

const sign = (payload) => {
  return jwt.sign(payload, secretKey);
};

const verify = (access_token) => {
  return jwt.verify(access_token, secretKey);
};

module.exports = { sign, verify };
