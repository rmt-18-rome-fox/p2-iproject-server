const jwt = require('jsonwebtoken')
require('dotenv').config()

function signToken(value){
    const secretkey = process.env.SECRETKEY
    return jwt.sign(value,secretkey)
}

function verifyToken(value){
    secretkey = process.env.SECRETKEY
    return jwt.verify(value,secretkey)
}

module.exports = {signToken,verifyToken}