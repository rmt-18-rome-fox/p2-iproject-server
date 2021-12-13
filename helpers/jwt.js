const jwt = require('jsonwebtoken');

function signToken(payload) {
    return jwt.sign(payload, 'rahasia');
}

function verifyToken(token) {
    return jwt.verify(token, 'rahasia')
}

module.exports = {
    signToken,
    verifyToken
}