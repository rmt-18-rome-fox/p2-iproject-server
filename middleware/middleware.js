const {User} = require("../models/index")

const authentication = async (req, res, next) =>{
    try{
        const {access_token} = req.headers

    }catch(err){

    }
}

const authorization = async (req, res, next) =>{
    try{

    }catch(err){

    }
}

module.exports = { authentication, authorization }