const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY

const signToken = (value) => {
    return jwt.sign(value, SECRET_KEY);
}

const verifyToken = (token) => {
    return jwt.verify(token, SECRET_KEY);
}

module.exports = {signToken, verifyToken}
