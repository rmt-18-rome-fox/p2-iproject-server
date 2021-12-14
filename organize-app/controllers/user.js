const { User } = require('../models')
const bcrypt = require('bcrypt')
const { createToken } = require('../helpers/jwt')

class UserController {
    static async register(req, res, next) {
        try {
            const { name, email, password, address } = req.body
            const response = await User.create({ name, email, password, address })
            res.status(201).json({
                name: response.name,
                email: response.email
            })
        } catch (err) {
            next(err)
        }
    }
    static async login(req, res, next) {
        try {
            const { email, password } = req.body
            if (!email || !password) {
                throw { name: "notFoundId" }
            }
            const response = await User.findOne({
                where: { email }
            })
            if (!response) {
                throw { name: 'notFoundId' }
            }
            const isValidPassword = bcrypt.compareSync(password, response.password)
            if (!isValidPassword) {
                throw { name: 'notFoundId' }
            }
            const payload = {
                id: response.id,
                email: response.email,
            }
            const userById = {
                id: response.id,
                email: response.email,
                role: response.role
            }
            res.status(200).json({ access_token: createToken(payload), userById })
        } catch (err) {
            next(err)
        }
    }

}

module.exports = UserController