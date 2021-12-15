const {verifyToken} = require('../helpers/jwt')
const {User} = require('../models')

const authentication = async(req,res,next) =>{
    try {
        const{access_token} = req.headers
        const payload = verifyToken(access_token)

        if(!access_token){
            throw {name:"JsonWebTokenError"}
        }
        const user = await User.findOne({
            where:{
                email:payload.email
            }
        })
        if(!user){
            throw {name: "User_Not_Found"}
        }
        req.user ={
            id: user.id,
            email: user.email
        }
        next() 
        
    } catch (error) {
        next(error)
    }
}

module.exports = {authentication}