require('dotenv').config()
const {User} = require('../models')
const compare = require('../helpers/bcrypt')
const {maketoken} = require('../helpers/jwt')

class UserController {
    static async register(req,res,next){
        try {
            const {username,email,password,role="Customer"} = req.body
            const user = await User.create({username,email,password,role})
            res.status(201).json({
                id : user.id,
                email: user.email,
                role : user.role
            })
        } catch (err) {
            console.log(err)
           next(err)
        }
    }

    static async login(req,res,next){ 
        try {
            const {email,password} = req.body
            if (!email || !password) {
                throw {name : `required`}
            }
            const user = await User.findOne({where : {email}})
            if (!user) {
                throw{name: `wrong`}
            }
            const validPassword = compare(password,user.password)
            if (!validPassword) {
                throw{name: `wrong`}
            }
            const payload ={
                id : user.id,
                username: user.username,
                email: user.email,
                role :user.role
            }
            const access_token = maketoken(payload)
            res.status(200).json({access_token,payload})
        } catch (err) {
            console.log(err)
            next(err)
        }
    }

}




module.exports = UserController