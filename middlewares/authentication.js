const { User } = require('../models');
const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRETKEY;

const authentication = async (req, res, next) => {
    try {
        const access_token = req.headers.access_token;
        if (!access_token) throw { name: 'JsonWebTokenError' };
        
        const payloadConversion = jwt.verify(access_token, secretKey);
        if (!payloadConversion) throw { name: 'JsonWebTokenError' };
        console.log(payloadConversion, '<<<< DI AUTH');
        const user = await User.findByPk(payloadConversion.id);
        if (!user) throw { name: 'JsonWebTokenError' };

        req.user = {
            id: user.id
        }
        next();
    } catch (err) {
        next(err);
    }
}

module.exports = authentication;