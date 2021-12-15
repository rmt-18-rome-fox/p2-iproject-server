const {User} = require('../models')
const compare = require('../helpers/bcrypt')
const {maketoken} = require('../helpers/jwt')
const nodemailer = require("nodemailer")
// const {OAuth2Client} = require('google-auth-library');

class UserController {
    static async register(req,res,next){
        try {
            const {username,email,password,role="Customer"} = req.body
            const user = await User.create({username,email,password,role})
           
            let transporter = nodemailer.createTransport({
                service:'gmail',
                auth: {
                    user: process.env.Email,
                    pass: process.env.PASSWORD
                }
            })
           
            let mailOp = {
                from: process.env.Email,
                to: `${email}`,
                subject: 'Thank You!',
                text: `
              Dear ${email},
                You Joined Us on This Web Game Community!`
              }
              
              transporter.sendMail(mailOp, (err, data)=>{
                if (err){
                    console.log(err)
                } else {
                    console.log('cek email ya')
                }
              })
           
           
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
            if (!email) {
                throw {name : `email`}
            }
            if (!password) {
                throw {name : `password`}
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

    static async googleRegister(req,res,next){
        console.log(req.body)
       
        try {
           const {idToken} = req.body
       
           const client = new OAuth2Client(process.env.GOOGLE_CLIENT);
           const ticket = await client.verifyIdToken({
               idToken,
               audience : process.env.GOOGLE_CLIENT
           })
         
           const payload = ticket.getPayload();
           
           const userid = payload['sub'];
           const random = Math.random().toString(36).substr(2, 5);
           const username = payload.name.replace(' ','_')
           const payloaduser = 
           {
               username,
               email:payload.email,
               password : random,
               role: "customer",
               phoneNumber:"0888888888",
               address:"Jakarta"
           }
       
            const [user,created] = await User.findOrCreate({
                where :{
                    email : payload.email
                },
                defaults : payloaduser
            })
         
                const newUser = {
                   id : user.id,
                   username: user.username,
                   email: user.email,
                   role :user.role
                 }

               const acces_token = maketoken(newUser,secretkey)
               res.status(201).json({acces_token,newUser})
          

            
        } catch (err) {
           
            next(err)
        }
      
    }

}




module.exports = UserController