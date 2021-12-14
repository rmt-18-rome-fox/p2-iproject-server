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
            console.log(err)
            res.status(500).json({message: "Internal server error"})
        }
    }
}

module.exports = UserController