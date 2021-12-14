const jwt = require('jsonwebtoken')
const secret_key = 'inisecretkeymatteanime'

const signToken = (payload) => jwt.sign(payload, secret_key)
const verifyToken = (token) => jwt.verify(token, secret_key)

module.exports = {signToken, verifyToken}