const {User} = require('../models')
const {verifyPassword} = require('../helper/bcrypt')
const { generateToken, verifyToken } = require('../helper/jwt')

class UserController {
    static async register (req, res, next) {
        try {
            let {username, email, password} = req.body

            let newUser = await User.create({username, email, password})

            const payload = {
                id: newUser.id,
                username: newUser.username,
                email: newUser.email,
            }

            res.status(201).json(payload)
            
        } catch (err) {
            next(err)
        }
    }

    static async login (req, res, next) {
        try {
            const { email, password } = req.body;
            if (!email) {
                throw {name: "invalid email or password"}
            }
            const user = await User.findOne({
                where: {
                    email
                }
            })
            if(!user) {
                throw {name: 'invalid email or password'}
            }
    
            let comparePassword = verifyPassword(password, user.password)
    
            if(!comparePassword){
                throw {name: 'invalid email or password'}
            }else {
                let payload = {
                    id: user.id,
                    email: user.email,
                }
    
                let token = generateToken(payload)
                res.status(200).json({access_token: token})
            }
    
        } catch (err) {
            next(err)
        }
    }
    
}

module.exports = UserController