const {OAuth2Client} = require('google-auth-library');
const {User} = require('../models');
const {signPayload} = require('../helpers/jwt');

const authGoogle = async (req, res, next) => {
    try {
        const {idToken} = req.body;
        const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)
        const ticket = await client.verifyIdToken({
            idToken,
            audience: process.env.GOOGLE_CLIENT_ID
        });
    
        const payload = ticket.getPayload();
    
        let [user, created] = await User.findOrCreate({
            where: {
                email: payload.email
            },
            defaults: {
                name: payload.name,
                username: payload.name,
                email: payload.email,
                password: 'SignIn by Google',
                role: 'Customer',
            }
        })
        const dataFromGoogle = {
            id: user.id,
            username: user.username,
        }

        const userPayload = {
            id: user.id,
            username: user.username,
            email: user.email,
        }
        res.status(200).json({access_token: signPayload(userPayload), dataFromGoogle})
    } catch (err) {
        next(err)
    }
    
    
}

module.exports = {
    authGoogle,
};