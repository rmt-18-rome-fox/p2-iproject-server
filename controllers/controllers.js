const { User } = require('../models')
const bcrypt = require('bcrypt')

const register = async(req,res,next) => {
    try {
        const {username,email,password,role,phoneNumber} = req.body
        const result = await User.create({
            username,email,password,role: 'admin',phoneNumber
        })

        res.status(201).json({
            id: result.id,
            email: result.email,
        })
        
    } catch (err) {
        next(err)
    }
}


module.exports = {register}