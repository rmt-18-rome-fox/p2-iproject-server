const jwt = require("jsonwebtoken");

function changetopayload(token) {
   return jwt.verify(token, process.env.ACCESS_TOKEN)
}

function maketoken(obj) {
    return  jwt.sign(obj,process.env.ACCESS_TOKEN)
}

module.exports = {changetopayload , maketoken}