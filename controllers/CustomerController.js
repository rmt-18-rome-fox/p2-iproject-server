const { User, Profile, Consultation } = require('../models')
const axios = require('axios');
const moment = require('moment')
moment().utcOffset(0, true).format()
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
            attributes: {
                exclude: ['password', 'createdAt', 'updatedAt']
            },
            include: {
                model: Profile,
                key: 'id',
                attributes: {
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

    static async addBooking(req, res, next) {
        try {
            let { startDate, session, notes } = req.body
            const ArchitectId = req.params.architectId
            const CustomerId = req.user.id

            startDate = Date.parse(startDate)
            startDate = moment(startDate)
            startDate = moment(startDate).add('hours')
            let endDate = moment(startDate).add(1, 'hours')
            startDate = new Date(startDate)
            startDate = moment(startDate).utcOffset(0, true).format() 
            endDate = new Date(endDate)
            endDate = moment(endDate).utcOffset(0, true).format() 

            const findArchitect = await User.findOne({
                where: {
                    id: ArchitectId
                },
                include: {
                    model: Profile,
                    key: 'id'
                }
            })

            const price = findArchitect.Profile.price

            let consultation = await Consultation.create({
                startDate, 
                endDate,
                ArchitectId,
                CustomerId,
                notes,
                price,
                isPayed: false // status ada active dan inactive (inactive artinya udah beres)
            })
            // const { accept, 'content-type', authorization } = req.headers
            // const b = new Buffer.from('Mid-server-6AEqN-PhH3nADMQMxG8ObEld', 'utf8')
            // console.log(b.toString('base64'))
            const AUTH_STRING = new Buffer.from('SB-Mid-server-ejgmiwXrRhnl5dmLoTS4EqjW:').toString('base64')
            console.log(AUTH_STRING)
            let midtrans = await axios({
                method: 'POST',
                url: 'https://app.sandbox.midtrans.com/snap/v1/transactions',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Basic ${AUTH_STRING}`
                },
                data: {
                    "transaction_details": {
                        "order_id": consultation.id,
                        "gross_amount": price
                    },
                    "customer_details": {
                        "email": req.user.email,
                    }
                }
            })
            res.status(200).json(midtrans.data)
        } catch (err) {
            console.log(err.message)
            next(err)
        }
    }

    static getProfile(req, res, next) {
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

    static editProfile(req, res, next) {
        const payload = req.body
        Profile.update(payload, {
            where: {
                UserId: req.user.id
            }
        })
            .then(data => {
                res.status(200).json({ message: 'Profile updated' })
            })
            .catch(err => {
                next(err)
            })
    }

    static paymentDone(req, res, next) {
        const id = +req.body.order_id
        Consultation.update({isPayed: true}, {
            where: {
                id
            }
        })
        .then(data => {
            res.status(200).json({message: 'success update payment'})
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = CustomerController