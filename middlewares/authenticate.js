const { verifyToken } = require('../helpers/jwtToken.js');
const { User } = require('../models');

async function Authenticate(req, res, next) {
    try {
        let { access_token } = req.headers;
        if (!access_token) {

            throw { name: `Invalid Token`}
        }
        const payload = verifyToken(access_token)
        const response = await User.findOne ({ where: {email: payload.email}})
        if (!response) {
            throw { name: "Unauthorized"}
        } 
        req.user = {
            id: response.id,
            email: response.email
        }
        next();
        
    } catch (error) {
        next(error)
    }
}

module.exports = Authenticate