const bcryptCompare = require('../helpers/bcryptCompare')
const convertPayLoad = require('../helpers/convertPayLoad')
const jwtToken = require('../helpers/jwtToken')
const { User, Car, Booking } = require('../models')
const { Op } = require("sequelize")

class Controller {
    static register(req, res, next) {
        const { username, email, password, phoneNumber } = req.body
        User.create({ username, email, password, role: "Customer", phoneNumber })
            .then(data => res.status(201).json({ id: data.id, email: data.email }))
            .catch(err => next(err))
    }

    static login(req, res, next) {
        if(!req.body.email || req.body.email === null) throw {message: 'Email must be inputed'}
        if(!req.body.password || req.body.password === null) throw {message: 'Password must be inputed'}
        const email = req.body.email
        User.findOne({ where: { email } })
            .then(data => {
                if (!data) throw { message: "Email tidak valid" }
                let passValid = bcryptCompare(req.body.password, data.password)
                if (passValid) {
                    const payLoad = {
                        id: data.id,
                        email: data.email,
                        role: data.role
                    }
                    const access_token = jwtToken(payLoad)
                    res.status(200).json({ access_token })
                } else { message: "Password tidak valid" }
            })
    }

    static postCar(req, res, next) {
        const payload = convertPayLoad(req.headers.access_token)
        const userId = payload.id
        const imageUrl = req.url
        const { name, brand, year, price } = req.body
        Car.create({ name, brand, year, price, imageUrl, userId })
            .then(data => {
                res.status(201).send(data)
            })
            .catch(err => next(err))
    }

    static editCar(req, res, next) {
        const payload = convertPayLoad(req.headers.access_token)
        const userId = payload.id
        const id = req.params.id
        const imageUrl = req.url
        const { name, brand, year, price } = req.body
        Car.update({ name, brand, year, price, imageUrl, userId }, { where: { id } })
            .then(data => {
                Car.findOne({ where: { id } })
                    .then(data => {
                        res.status(200).json(data)
                    })
            })
            .catch(err => next(err))
    }

    static getCar(req, res, next) {
        let priceMin = req.query.priceMin
        let priceMax = req.query.priceMax
        let filterByBrand = req.query.filterByBrand
        if (!req.query.priceMin) priceMin = 0
        console.log(Infinity)
        if (!req.query.priceMax) priceMax = 999999999999999999
        if (!req.query.filterByBrand) filterByBrand = ''
        Car.findAll({
            where: {
                brand: {
                    [Op.iLike]: `%${filterByBrand}%`
                },
                price: {
                    [Op.and]: [
                        { [Op.gte]: priceMin },
                        { [Op.lte]: priceMax }
                    ]
                }
            }
        })
            .then(data => {
                res.status(200).send(data)
            })
            .catch(err => next(err))
    }

    static async postBook(req, res, next) {
        try {
            const payload = convertPayLoad(req.headers.access_token)
            const priceCar = await Car.findOne({ where: { id: req.params.carId } })
            const dataEnd = new Date(req.body.dateEnd)
            const dateStart = new Date(req.body.dateStart)
            const price = priceCar.price * (dataEnd - dateStart)
            const data = await Booking.create({
                price: price,
                status: 'Payed',
                dateStart: req.body.dateStart,
                dateEnd: req.body.dateEnd,
                userId: payload.id,
                carId: req.params.carId
            })
            res.status(201).send(data)
        } catch (error) {
            next(error)
        }
    }

    static getBook(req, res, next) {
        const payload = convertPayLoad(req.headers.access_token)
        Booking.findAll({ where: { userId: payload.id }, include: { model: Car, key: 'userId' } })
            .then(data => res.status(200).send(data))
            .catch(err => next(err))
    }
}

module.exports = { Controller }