const { User, Profile } = require('../models')

class CustomerController {
    static fetchFeaturedArchitect(req, res, next) {
        User.findAll({
            where: {
                role: 'architect'
            },
            attributes: ['id', 'role'],
            limit: 5,
            include: {
                model: Profile,
                key: 'id',
                attributes: ['name', 'description', 'imageUrl']
            }
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                next(err)
            })
    }

    static fetchArchitects(req, res, next) {
        User.findAll({
            where: {
                role: 'architect',
            },
            attributes: ['id', 'email'],
            include: {
                model: Profile,
                key: 'id',
                attributes: {
                    exclude: ['createdAt', 'updatedAt', 'UserId']
                }
            }
            
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}

module.exports = CustomerController