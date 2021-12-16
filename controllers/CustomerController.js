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

const loginCustomer = async(req,res,next)=>{
    try {
        const {email,password} = req.body
        if(!email){
            throw {name: "Email is required"}
        }
        if(!password){
            throw {name: "Password is required"}
        }

       const result = await User.findOne({
           where:{email}
       })
       if(!result){
        throw {name: "Invalid email/password"}
       }

       const isPassword = bcrypt.compareSync(password, result.password)
       if(!isPassword){
        throw {name: "Invalid email/password"}
       }
       const payload ={
           id:result.id,
           email:result.email
       }
       const user ={
        id : result.id,
        email: result.email,
        role: result.role
    }

       const access_token = signToken(payload)
       res.status(200).json({access_token: access_token,user})

    } catch (error) {
        next(error)
    }
}

module.exports = {registerCustomer,loginCustomer}