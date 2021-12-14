const jwt = require('jsonwebtoken')
// require('dotenv').config()

function createToken(value) {
    // const secretKey = "rahasia123"
    return jwt.sign(value, process.env.JWT_SECRET)
}

function verifyToken(value) {

    return jwt.verify(value, process.env.JWT_SECRET)
}

module.exports = { createToken, verifyToken }