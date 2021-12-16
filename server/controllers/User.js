const {comparePassword, signPayload} = require ("../helper/formatter")
const {User} = require("../models")

module.exports = class UserAccount {
  static register = async(req,res,next) =>{
    try {
      const {name, username, password, email, phoneNumber, address, status} = req.body
      const input = {name, username, password, email, phoneNumber, address, status}
      const respond = await User.create (input)
      res.status(201).json({
        id: respond.id,
        email: respond.email
      })
    } catch (err) {
        next(err)
      }
    }
  

  static login = async (req, res, next) => {
    try {
      const {email,password} = req.body
      if(!email || !password) {
        next({name: "badRequest"})
      }
      const response = await User.findOne ({
        where : {email}
      })
      if (!response) {
        next ({name: "user_not_found"})
      }
      const isValid = comparePassword(password, response.password)
      if(!isValid) {
        next ({name: "unauthorized"})
      }
      const payload = {
        id: response.id,
        email: response.email,
        status: response.status
      }
      const access_token = signPayload(payload)
      res.status(200).json({access_token,status: response.status})
    } catch (err) {
      next (err)
    }
  }

  static updateStatus = async (req,res,next) => {
    try {
      const {id} = req.user
      const status = "Premium"
      const response = await User.update({status} ,{where: {id}, returning: true})
      if (!response) {
        next ({name: "user_not_found"})
      } 
    } catch(err) {
      next(err)
    }
  }


} 
