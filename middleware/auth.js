const {changetopayload} = require('../helper/jwt')
const {User, Post} = require('../models')

const Authentikasi = async (req,res,next)=>{
    try {
        const token = req.headers.acces_token
        if (!token) {
            throw { name : 'JsonWebTokenError'}
        }
        const verify= changetopayload(token)
        
        const user =  await User.findOne({
          where:{
              email : verify.email,
              id : verify.id,
              role: verify.role
            }
        })
        if (!user) {
            throw { name : 'UserNotFound'}
        }

        req.user = {
            email : user.email,
            id : user.id,
            role: user.role
        }

        next()
    } catch (err) {

        next(err)
    }

}

module.exports = { Authentikasi }