const {FootballClub} = require('../models')

class Controller {
    static async addClub(req, res, next) {
        try {
            const role = req.user.role
            if(role !== 'admin') {
                throw {name: 'UnauthorizedAccess'}
            }

            const addClub = {
                name: req.body.name,
                clubPict: req.urlSent
            }

            const newClub = await FootballClub.create(addClub)
            res.status(201).json(newClub)
        } catch (err) {
            next(err)
        }
    }

    static async showClub(req, res, next) {
        try {
            const showClub = await FootballClub.findAll({
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            });
            res.status(200).json(showClub); 
        } catch (err) {
            next(err)
        }
    }
}

module.exports = Controller;