const jwt = require("jsonwebtoken")

const generateToken = (payload) => {
	return jwt.sign(payload, process.env.JWT_SIGNATURE)
}

const verifyToken = (access_token) => {
	return jwt.verify(access_token, process.env.JWT_SIGNATURE)
}

module.exports = { generateToken, verifyToken }
