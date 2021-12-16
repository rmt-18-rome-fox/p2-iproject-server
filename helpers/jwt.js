const jwt = require('jsonwebtoken');
const SECRET_KEY = 'rahasiabanget';

const signPayload = (payload) => {
    return jwt.sign(payload, SECRET_KEY);
};

const verifyToken = (token) => {
    return jwt.verify(token, SECRET_KEY);
};

module.exports = {
    signPayload,
    verifyToken
};