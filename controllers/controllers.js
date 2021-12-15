const { User,Hero,SuperHero } = require('../models')
const bcrypt = require('bcrypt')
const {signToken} = require('../helpers/jwt')
const axios = require('axios')

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

const login = async(req,res,next)=>{
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

const addHero = async(req,res,next) => {
    try {
        
        
        const { name, location, imgUrl, date} = req.body
        const result = await Hero.create({ name, location, imgUrl, date })  
        res.status(201).json(result)

    } catch (err) {
        next(err)
    }
}

const getHero = async (req,res,next) => {
    try {
        const result = await Hero.findAll({
        })

        res.status(200).json(result)
        
    } catch (error) {
        next(err)
    }
}

const getHeroId = async (req,res,next) => {
    try {
        
        const superhero_token = "10209503281895479"
        const api_key = "26cd861a8cdd42114b639f44f4c835c0"
        const id  = +req.params.id
        const result = await Hero.findByPk(id)
    if (!result) {
        throw { name: "notFound"}
    }
   
      const result2 = await axios({
        method:"get",
        url:`https://superheroapi.com/api/${superhero_token}/search/${result.name}`,
        })

        const result3 = await axios({
            method:"get",
            url:`https://api.openweathermap.org/data/2.5/weather?q=${result.location}&appid=${api_key}`,
            })




        const result4 = {
            result: result,
            result2: result2.data.results,
            result3: result3.data
        }

        console.log(result4, ">>>>>>>>>>>>>>>>>>>>>>>>>>> ini result")
        
        res.status(200).json(result4)
        
    } catch (err) {
        next(err)
    }
}


const getSuperHero = async (req,res,next) => {
    try {
        const result = await SuperHero.findAll({
        })

        res.status(200).json(result)
        
    } catch (error) {
        next(err)
    }
}


module.exports = {register,login,addHero,getHero,getHeroId,getSuperHero}