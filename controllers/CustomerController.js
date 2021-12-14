const { User, Profile, Consultation } = require('../models')

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

    static architectDetails(req, res, next) {
        const id = req.params.architectId
        User.findOne({
            where: {
                id
            },
            attributes : {
                exclude: ['password', 'createdAt', 'updatedAt']
            },
            include: {
                model: Profile,
                key: 'id',
                attributes : {
                    exclude: ['UserId', 'createdAt', 'updatedAt']
                }
            }
        })
            .then(data => {
                if (!data) throw { name: 'ARCHITECT_NOT_FOUND' }
                if (data.role !== 'architect') throw { name: 'ARCHITECT_NOT_FOUND' }
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static async addBooking (req, res, next) {
        try {
            const { scheduleDate, scheduleHour, notes } = req.body
            const ArchitectId = req.params.architectId
            const CustomerId = req.user.id

            const findArchitect = await User.findOne({where: {
                id: ArchitectId
            }})

            const price = findArchitect.price

            Consultation.create({
                scheduleDate,
                scheduleHour,
                ArchitectId,
                CustomerId,
                notes,
                price,
                status: 'active' // status ada active dan inactive (inactive artinya udah beres)
            })
        } catch (err) {
            next(err)
        }
    }

    static getProfile (req, res, next) {
        Profile.findOne({
            where: {
                UserId: req.user.id
            },
            attributes: {
                exclude: ['description', 'price', 'createdAt', 'updatedAt']
            }
        })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            next(err)
        })
    }

    static editProfile (req, res, next) {
        const payload = req.body
        Profile.update(payload, {
            where: {
                UserId: req.user.id
            }
        })
        .then(data => {
            res.status(200).json({message: 'Profile updated'})
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = CustomerController