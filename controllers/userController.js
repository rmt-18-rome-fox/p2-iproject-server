const { User } = require('../models')
const bcrypt = require('bcryptjs')
const { OAuth2Client } = require('google-auth-library')
const { createToken } = require('../helpers/jwt')

class userController {
    static async register(req, res, next) {
        try {
            const { username, email, password, phoneNumber, address } = req.body
            const response = await User.create({ 
                username, email, password, role: 'Admin', phoneNumber, address 
            })
            res.status(201).json({
                id: response.id,
                username: response.username,
                email: response.email,

            })
        } catch (err) {
            next(err)
        }
    }

    static async authGoogle(req, res, next) {
        try {
            const { idToken } = req.body
            const client = new OAuth2Client(process.env.CLIENT_ID)

            const ticket = await client.verifyIdToken({
                idToken,
                audience: process.env.CLIENT_ID,
            });

            const payload = ticket.getPayload();

            let [user, created] = await User.findOrCreate({
                where: {
                    email  : payload.email
                },
                defaults : {
                    username: payload.name,
                    email  : payload.email,
                    password : "LoginGoogle",
                    role : 'Staff',
                    phoneNumber : 'Login from google',
                    address : 'Login from google'
                }
            })

            const payloadUser = {
                id: user.id,
                username: user.username,
                email: user.email
            }

            const dataUser = {
                id : user.id,
                email : user.email,
                role: user.role
            }

            res.status(200).json({ token: createToken(payloadUser), dataUser })

        } catch (err) {
            console.log(err);
            // next(err)
        }
    }

    static async login(req, res, next) {
        try {
            const { email, password } = req.body

            console.log(req.body);
            if (!email || !password) {
                throw { name: "notFound" }
            }

            const response = await User.findOne({
                where: { email }
            })

            if (!response) {
                throw { name: "unauthorized" }
            }

            const isValid = bcrypt.compareSync(password, response.password)

            if (!isValid) {
                throw { name: "notValid" }
            }

            const payload = {
                id: response.id,
                username: response.username,
                email: response.email
            }

            const dataUser = {
                id : response.id,
                email : response.email,
                role: response.role
            }

            res.status(200).json({ token: createToken(payload), dataUser})

        } catch (err) {
            next(err)
        }
    }
}

module.exports = userController