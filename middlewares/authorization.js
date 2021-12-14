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

module.exports = {
    customerAuthorization,
    architectAuthorization
}