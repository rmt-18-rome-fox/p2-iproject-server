const { verifyToken } = require('../helpers/jwt')
const { User, Movie } = require('../models')

class Middleware {
    static async authenticate(req, res, next) {
        try {
            const { token } = req.headers
            // console.log(req.headers);

            const payload = verifyToken(token)

            const user = await User.findOne({
                where: {
                    id: payload.id,
                    username: payload.username,
                    email: payload.email
                }
            })
            if (!user) {
                throw ({ name: "notFound" })
            }

            req.user = {
                id: user.id,
                username: user.username,
                email: user.email,
                role: user.role
            }

            console.log('HOREEE', req.user);
            next()
        } catch (err) {
            console.log(err);
            next(err)

        }
    }

    static async authorization(req, res, next) {
        try {
            const { token } = req.headers
            // console.log(req.headers);
            const payload = verifyToken(token)
            const movieId = +req.params.id
            const idnyaUser = req.user.id
            const movie = await Movie.findByPk(movieId)
            if (!movie) {
                throw { name: "notFound" }
            }
            const user = await User.findOne({
                where: {
                    id: payload.id,
                    username: payload.username,
                    email: payload.email
                }
            })
            if (user.role !== 'Admin') {
                if (movie.AuthorId !== idnyaUser) {
                    throw { name: "forbidden" }
                }
            }
            next()
        } catch (err) {
            next(err)
        }
    }
}

module.exports = Middleware