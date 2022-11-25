
const jwt = require('jsonwebtoken')
const secret_key = process.env.SECRETKEY
const signToken = (payload) => jwt.sign(payload, secret_key)
const verifyToken = (token) => jwt.verify(token, secret_key)

module.exports = {signToken, verifyToken}