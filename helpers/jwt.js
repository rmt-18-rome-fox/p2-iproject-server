const jwt = require("jsonwebtoken");

function changetopayload(token) {
   return jwt.verify(token, process.env.TOKEN)
}

function maketoken(obj) {
    return  jwt.sign(obj,process.env.TOKEN)
}

module.exports = {changetopayload , maketoken}