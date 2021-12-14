const { User, Profile } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { createToken } =require('../helpers/jwt'); 
const res = require('express/lib/response');

const login = async (req, res, next) => {
    try {
        const {email, password} = req.body;
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
        console.log(payload)
        let access_token = createToken(payload)
        console.log('hehe')
        console.log(access_token, '<<<<<<<<<<<< ini access token')
        res.status(200).json({access_token})
    } catch (err) {
        next(err)
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
        next(err)
    }
}

module.exports = {
    login,
    register
}