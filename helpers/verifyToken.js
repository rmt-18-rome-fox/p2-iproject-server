const jwt = require("jsonwebtoken");
const secretkey = process.env.SECRETKEY;

verifyToken=(x)=>{
    return jwt.verify(x,secretkey)
}

module.exports=verifyToken