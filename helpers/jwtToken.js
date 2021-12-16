require("dotenv").config()
const secretKey = process.env.SECRETKEY
const jwt = require('jsonwebtoken')

function jwtToken(payload){
    return jwt.sign(payload, secretKey)
}

module.exports = jwtToken