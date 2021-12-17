const {verifyToken} = require ('../helper/jwt.js')
const {User} = require ('../models')

const authentication = async (req, res, next) => {

    try {
        const {access_token} = req.headers
        if(!access_token){
            throw {name: 'unauthorized'}
        }else {
            const user = verifyToken(access_token)
        
            const response = await User.findOne({where: {
                id: user.id,
                email: user.email
            }});
    
            if(!response) {
                throw {name: 'unauthorized'}
            }
    
            req.user = {
                id: response.id,
                email: response.email,
                username: response.username
            }
    
            next()
        }
    } catch (err) {
        next(err)
    }

}

module.exports = {authentication}
