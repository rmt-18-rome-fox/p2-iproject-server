const { User } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { createToken } =require('../helpers/jwt') 

const login = async (req, res, next) => {
    const {email, password} = req.body;
    try {
        const loginUser = await User.findOne({where: {
            email
        }})
        if (!loginUser) throw {name: 'unauthorized'}

        const isValid = comparePassword(password, loginUser.password)
        if (!isValid) throw {name: 'unauthorized'}

        let payload = {
            id: loginUser.id,
            email: loginUser.email,
            role: loginUser.role
        }
        let access_token = createToken(payload)
        res.status(200).json({access_token})
    } catch (err) {
        if (err.name == 'unauthorized') {
            res.status(401).json('invalid email/password')
        } else {
            res.status(500).json({message: "Internal Server Error"})
        }
    }
    

}

const register = async (req, res, next) => {
    const { email, password, role } = req.body
    console.log(email, password, role)
    try {
        if (role !== 'architect' && role !== 'user' && role !== 'admin') {
            throw { name: 'ROLE_INVALID' }
        } else {
            const newUser = await User.create({ email, password, role })

            let output = {
                email: newUser.email,
                role: newUser.role
            }
            res.status(201).json(output)
        }
    } catch (err) {
        if (err.name == 'ROLE_INVALID') {
            res.status(400).json({message: "Role is Invalid"})
        } else {
            res.status(500).json({message: "Internal Server Error"})
        }
    }

}

module.exports = {
    login,
    register
}