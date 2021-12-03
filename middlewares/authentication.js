const {User} = require('../models')
const { toPayload } = require("../helpers/jwt")

const authentication = async (req, res, next) => {
    try {
        const {access_token} = req.headers
        const payload = toPayload(access_token)
        const checkUser = await User.findOne({where: {
            id: payload.id
        }})
        if(!checkUser) {
            throw {name: 'USER_UNAUTHORIZED'}
        }

        req.user = {
            id:user.id,
            email:user.email,
            role:user.role
        }

        next()
    } catch (err) {
        if (err.name == 'USER_UNAUTHORIZED') {
            res.status(401).json({message: "Invalid Token"})
        } else {
            res.status(500).json({message: "Internal Server Error"})
        }
    }

}

module.exports = {
    authentication
}