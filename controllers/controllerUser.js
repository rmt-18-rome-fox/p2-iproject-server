const {User, WatchList} = require('../models/index')
const {comparePassword} = require('../helpers/bcrypt')
const {signToken} = require('../helpers/jwt')
// const { } = require("pas")
const client_id_fb = process.env.CLIENT_ID_FB
const client_secret_fb = process.env.CLIENT_SECRET_FB

const register = async(req, res, next) => {
  try {
    const {password, email, fullName} = req.body
    console.log({password, email, fullName});
    const user = await User.create({email, password, fullName})
    res.status(201).json(user)
  } catch (err) {
    next(err)
  }
}

const login = async (req, res, next) => {
  try {
    const {email, password} = req.body
    // console.log({email, password});
    if(!email) throw {name: 'Email not found'}
    if(!password) throw {name: 'Password not found'}
    const user = await User.findOne({where: {email}})
    if(!user) throw {name: "Unauthorized Login"}
    const isValidPassword = comparePassword(password, user.password)
    if(!isValidPassword) throw {name: "Unauthorized Login"}
    const payload = {
      id: user.id
    }
    const access_token = signToken(payload)
    res.status(200).json({access_token: access_token})
  } catch (err) {
    next(err)
  }
}

// const loginGoogle = async (req, res, next) => {
//   try {
//     const passport = require('passport')
//     const FacebookStrategy = require('passport-facebook').Strategy;
//     const response = await passport.use(new FacebookStrategy({
//         clientID: client_id_fb,
//         clientSecret: client_secret_fb,
//         callbackURL: "http://www.example.com/auth/facebook/callback"
//       },
//       function(accessToken, refreshToken, profile, done) {
//         User.findOrCreate({facebookId: profile.id}, (err, user))
//       }
//     ))
//   } catch (err) {
    
//   }
// }

module.exports = {register, login}