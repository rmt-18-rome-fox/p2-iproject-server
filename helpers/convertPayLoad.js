require("dotenv").config()
const secretKey = process.env.SECRETKEY
const jwt = require('jsonwebtoken')

function convertPayLoad(token) {
    return jwt.verify(token, secretKey)
}

module.exports = convertPayLoad