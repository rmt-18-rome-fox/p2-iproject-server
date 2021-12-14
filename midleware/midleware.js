const {
    verifyToken
} = require('../helper/jwt-helper')
const {
    User,
    Movie
} = require('../models/index')


const authenMidleware = async (req, res, next) => {
    const {
        access_token
    } = req.headers
    try {
        const verify = verifyToken(access_token)
        if (!verify) throw {
            name: 'Token not correct'
        }
        const user = await User.findByPk(verify.id)
        if (!user) {
            throw {
                name: 'User Not Found'
            }
        } else {
            req.user = {
                id: user.id,
                username: user.username,
                role: user.role
            }
            next()
        }
    } catch (err) {
        next(err)

    }

}

const authorMidleware = async (req, res, next) => {
    const idM = req.params.id
    try {
        if (req.user.role === "Admin") {
            next()
        } else {
            let movie = await Movie.findByPk(idM)

            if (!movie) throw {
                name: 'Movie Not Found'
            }
            if (movie.authorId === req.user.id) {
                next()
            } else throw {
                name: 'Unauthorize'
            }

        }

    } catch (err) {
        next(err)

    }

}


const authorAdminMidleware = async (req, res, next) => {
    try {
        if (req.user.role === "Admin") {
            next()
        } else {
            throw {
                name: 'Only Admin can Update'
            }

        }


    } catch (err) {
        next(err)
    }

}

module.exports = {
    authenMidleware,
    authorMidleware,
    authorAdminMidleware
}