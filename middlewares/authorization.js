const {Portofolio} = require('../models')

const customerAuthorization = (req, res, next) => {
    try {
        if (req.user.role !== 'customer') throw {name: 'NOT_CUSTOMER'}
        else {
            next()
        }
    } catch (err) {
        next(err)
    }
}

const architectAuthorization = (req, res, next) => {
    try {
        if (req.user.role !== 'architect') throw {name: 'NOT_ARCHITECT'}
        else {
            next()
        }
    } catch (err) {
        next(err)
    }
}

const architectAuthorization2 = async (req, res, next) => {
    try {
        const portofolio = await Portofolio.findOne({where: {
            id: req.params.portofolioId,
            UserId: req.user.id
        }})
        if (portofolio == null) throw {name: 'ARCHITECT_UNAUTHORIZED'}
        else {
            next()
        }
        // if ()

    } catch (err) {
        next(err)
    }
}

module.exports = {
    customerAuthorization,
    architectAuthorization,
    architectAuthorization2
}