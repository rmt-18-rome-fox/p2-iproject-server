const { User, Bookmark } = require("../models")

class indexControllers {
    static async getClub (req, res, next) {
        try {
            console.log ('testing')
        }
        catch(err){
            next (err)
        }
    }

    static async getClubById (req, res, next) {
        try {
            console.log ('testing')
        }
        catch(err){
            next (err)
        }
    }

    static async getFixture (req, res, next) {
        try {
            console.log ('testing')
        }
        catch(err){
            next (err)
        }
    }
}

module.exports = indexControllers