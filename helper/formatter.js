var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY || "rahasia"

var hashPassword = (password) => {return bcrypt.hashSync(password, bcrypt.genSaltSync(8))};
var comparePassword = (password,dbpassword) => {return bcrypt.compareSync(password, dbpassword)};

var signPayload = (payload) => {return jwt.sign(payload, secretKey)};
var  verify = (access_token) => {return jwt.verify(access_token, secretKey)};

module.exports ={hashPassword, comparePassword, signPayload, verify}



