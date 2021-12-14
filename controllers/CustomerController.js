const { User } = require('../models')
const bcrypt = require('bcrypt')
// const {signToken} = require('../helpers/jwt')

const registerCustomer = async(req,res,next) => {
    try {
        const {username,email,password,role,phoneNumber} = req.body
        const result = await User.create({
            username,email,password,role: 'customer',phoneNumber
        })

        res.status(201).json({
            id: result.id,
            email: result.email,
        })
        
    } catch (err) {
        next(err)
    }

}

module.exports = {registerCustomer}