const { User, History } =  require('./models')
const { signToken, verifyToken } = require('./helpers/jwt')
const bcrypt = require('bcrypt')
const { sign } = require('jsonwebtoken')

class Controller {
    static async register (req, res, next) {
        try {
            const { name, email, password } = req.body
            console.log(req.body)
            const found = await User.findOne({
                where: {
                    email
                }
            })
            if (found) {
                throw {name: 'accountExisted'}
            } else {
                const response = await User.create({ name, email, password })
                const payload = {
                    id: response.id,
                    name: response.name
                }
                res.status(201).json(payload)
            }
        } catch (err) {
            next(err)
        }
    }
    static async login (req, res, next) {
        try {
            const { email, password } = req.body
            if(!email) throw {name: 'noEmail'}
            if(!password) throw {name: 'noPassword'}

            const response = await User.findOne({ where: {email} })
            if (!response) throw {name: 'invalidLogin'}

            if(!bcrypt.compare(password, response.password)) throw {name: 'invalidLogin'}

            const payload = {
                id: response.id,
                name: response.name,
                email: response.email
            }
            const access_token = signToken(payload)
            res.status(200).json({ access_token })
        } catch (err) {
            next(err)
        }
    }
    static async postHistory (req, res, next) {
        try {
            const { distance, carbonEmitted, origin, destination } = req.body
            const { UserId } = req.params
            const description = `shipment from ${origin} to ${destination}`
            console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", distance, carbonEmitted, origin, destination, UserId)
            const response =  await History.create({ distance, carbonEmitted, description, UserId })
            if(!response) {
                console.log('History not saved', err)
            }
            res.status(200).json({message: 'Saved History'})
        } catch (err) {
            next(err)
        }
    }
    static async getHistory (req, res, next) {
        try {
            const { UserId } = req.params
            const response = await History.findAll({
                where: {
                    UserId
                },
                order: [
                    ['createdAt', 'DESC']
                ]
            })
            res.status(200).json(response)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = Controller