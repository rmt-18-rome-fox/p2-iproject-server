const { User, Category, Product, Favorite} = require('../models')
const bcrypt = require('bcryptjs')
const { OAuth2Client } = require('google-auth-library')
const FacebookStrategy = require('passport-facebook').Strategy
const passport = require('passport')
const { createToken } = require('../helpers/jwt')
const {Op} = require("sequelize")
const axios = require('axios')

class customerController {
    static async register(req, res, next) {
        try {
            const { username, email, password, phoneNumber, address } = req.body
            const response = await User.create({ 
                username, email, password, role: 'Customer', phoneNumber : '081313123', address : 'Solololo'
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
                    role : 'Customer',
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
            // console.log(err);
            next(err)
        }
    }

    static async authGitHub(req, res, next) {
        try {
            const { username, password } = req.body
            let auth = Buffer.from(`${username}:${password}`).toString("base64")

            const response = await axios.post("https://api.github.com/user", {
                headers: {
                    'Authorization': 'Basic ' + auth
                }
            })
            console.log(auth, "<<<<<<< INI AUTH");
            console.log(response.data);


            // const client = new OAuth2Client(process.env.CLIENT_ID)

            // const ticket = await client.verifyIdToken({
            //     idToken,
            //     audience: process.env.CLIENT_ID,
            // });

            // const payload = ticket.getPayload();

            // let [user, created] = await User.findOrCreate({
            //     where: {
            //         email  : payload.email
            //     },
            //     defaults : {
            //         username: payload.name,
            //         email  : payload.email,
            //         password : "LoginGoogle",
            //         role : 'Customer',
            //         phoneNumber : 'Login from google',
            //         address : 'Login from google'
            //     }
            // })

            // const payloadUser = {
            //     id: user.id,
            //     username: user.username,
            //     email: user.email
            // }

            // const dataUser = {
            //     id : user.id,
            //     email : user.email,
            //     role: user.role
            // }

            // res.status(200).json({ token: createToken(payloadUser), dataUser })

        } catch (err) {
            // console.log(err);
            console.log(err);
            // next(err)
        }
    }

    static async authFacebook(req, res, next) {
        try {
            passport.use(new FacebookStrategy({
                clientID: process.env.CLIENT_ID_FB,
                clientSecret: process.env.CLIENT_SECRET_FB,
                callbackURL: "http://localhost:3000/auth/facebook/secrets",
                profileFilds : ['id', 'displayName', 'name', 'email']
              },
              function(token, refreshToken, profile, done) {
            
                let [user, created] = User.findOrCreate({ 
                    where : {
                        'id' : profile.id 
                    }, 
                 defaults : {
                    username: profile.emails[0].value,
                    email  : profile.emails[0].value,
                    password : "loginfacebook",
                    role : 'Customer',
                    phoneNumber : 'Login from facebook',
                    address : 'Login from facebook'
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
           
    }))
        } catch (err) {
            // console.log(err);
            next(err)
        }
    }

    static async custProductList(req, res, next) {
        try {
            
            let where = {
                UserId : 1
            }

            let {rating, name, page} = req.query
            if(!page) page = 1
            page = (page-1) * 8

            if (rating) {
                where.rating = rating
            }

            if(name) {
                where.name = {
                    [Op.iLike] : `%${req.query.name}%`
                }   
            }

            const response = await Product.findAndCountAll({
                where,
                offset: page,
                limit: 8,
                include: Category,
                order: [['id', 'desc']]
            })

            const dataPage = {
                TotalPage : Math.ceil(response.count/8),
                CurrentPage : req.query.page,
                TotalPost : response.count,
                Products : response.rows
            }

            if(dataPage.CurrentPage === undefined)  dataPage.CurrentPage = 1
            if(dataPage.TotalPage === 0)  dataPage.TotalPage = 1

            res.status(200).json(dataPage)

        } catch (err) {
            next(err)
        }
    }

    static async addFav(req, res, next) {
        try {
            if(req.user.role !== 'Customer') {
                throw { name: "forbidden"}
            }

            const {id} = req.params

            const response = await Product.findByPk(id)

            if(!response) {
                throw {name : 'notFound'}
            }

            const newFav = {
                UserId : req.user.id,
                ProductId : id
            }

            const favProduct = await Favorite.create(newFav)

            res.status(201).json(favProduct)

        } catch (err) {
            next(err)
        }
    }

    static async showFav(req, res, next) {
        try {
            if(req.user.role !== 'Customer') {
                throw { name: 'forbidden'}
            }
            const response = await Favorite.findAll({
                where: {
                    UserId : req.user.id
                },
                include : [
                    {
                        model : Product
                    }
                ]
            })
            res.status(200).json(response)
        } catch (err) {
            next(err)

        }
    }
}

module.exports = customerController