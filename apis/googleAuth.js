const { OAuth2Client } = require('google-auth-library');
const { User } = require(`../models`);
const { getToken } = require(`../helpers/jwt`)

let googleAuth = async (req, res, next) => {

    try {

        const { idToken } = req.body

        const client = new OAuth2Client(process.env.GOOGLE_OAUTH_CLIENT)

        const ticket = await client.verifyIdToken({
            idToken,
            audience: process.env.GOOGLE_OAUTH_CLIENT
        })

        const payloadGoogle = ticket.getPayload();

        let findUser = await User.findOne({
            where : {
                email : payloadGoogle.email
            }
        })

        let payload;
        let data;
        let access_token;

        if (!findUser) {
            const addUser = await User.create({ 
                email: payloadGoogle.email, 
                password: Math.random().toString(36).slice(-8), 
            });

            const findUserAfterCreate = await User.findOne({
                where : {
                    email : addUser.email
                }
            })

            payload = { id: findUserAfterCreate.id }

            access_token = getToken(payload)

            res.status(200).json({access_token});

        } else {
    
            payload = { id: findUser.id }
    
            access_token = getToken(payload)
    
            res.status(200).json({access_token});
        }
        
    } catch (error) {
        next(error);
    }
};

module.exports = {
    googleAuth,
}