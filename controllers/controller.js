const bcryptCompare = require('../helpers/bcryptCompare')
const { User, Car, Booking } = require('../models')

class Controller {
    static register(req, res, next) {
        const { username, email, password, phoneNumber } = req.body
        User.create({ username, email, password, role: "Customer", phoneNumber })
            .then(data => res.status(201).json({ id: data.id, email: data.email }))
            .catch(err => next(err))
    }

    static login(req, res, next) {
        const { email, password } = req.body
        User.findOne({ email: req.body.email })
            .then(data => {
                const isValid = bcryptCompare(req.body.password, data.password)
                if(!isValid) throw {message: 'Invalid Password'}
                // res.status(201).json({ id: data.id, email: data.email })
            })
            .catch(err => next(err))
    }
}

module.exports = { Controller }