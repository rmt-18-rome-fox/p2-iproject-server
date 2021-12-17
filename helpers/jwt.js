const jwt = require('jsonwebtoken')

const signToken = (payload) => {
    return jwt.sign(payload, 'secretkey')
}

const verifyToken = (token) => {
    return jwt.verify(token, 'secretkey')
}

module.exports = { signToken, verifyToken }