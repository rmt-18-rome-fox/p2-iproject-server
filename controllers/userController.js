const { User } = require("../models")

class userController {
    static async register (req, res, next) {
        try {
            console.log ('testing')
        }
        catch(err){
            next(err)
        }
    }

    static async login (req, res, next) {
        try {
            console.log ('testing')
        }
        catch(err){
            next(err)
        }
    }
}

module.exports = userController