const {User} = require("../models/index")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const userRegister = async (req, res, next) =>{
    try{
        const {email, password, name} = req.body
        if(!email || !password || !name) throw {name: "BAD_REQUEST"}

        const newUser = await User.create({
            name: name,
            email: email,
            password: password
        })

        res.status(201).json(newUser)
    }catch(err){
        if(err.name == "BAD_REQUEST"){
            res.status(400).json({msg: "Bad request"})
        }else{
            res.status(500).json({msg: "Something went down"})
        }
    }
}

const userLogin = async (req, res, next) =>{
    try{
        const {email, password} = req.body
        if(!email || !password) throw {name: "BAD_REQUEST"}
        
        const userLogin = await User.findOne({
            where:{
                email: email
            }
        })
        
        const validation = bcrypt.compareSync(password, userLogin.password)
        if(!validation) throw {name: "UNAUTHORIZED"}

        const payload = {
            id: userLogin.id,
            name: userLogin.name
        }

        const access_token = jwt.sign(payload, "sangatsangatrahasia")

        res.user = {
            id: userLogin.id,
            name: userLogin.name
        }

        res.status(200).json({access_token})
    }catch(err){
        if(err.name == "UNAUTHORIZED"){
            res.status(401).json({msg: "You are unauthorized"})
        }else if(err.name == "BAD_REQUEST"){
            res.status(400).json({msg: "Bad request"})
        } else{
            res.status(500).json({msg: "Something went down"})
        }
    }
}

module.exports = { userRegister, userLogin }