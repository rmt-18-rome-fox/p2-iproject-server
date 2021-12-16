const { hash, compare } = require('../helpers/bcrypt.js');
const { signToken, verifyToken } = require('../helpers/jwt.js');
const {User} = require('../models');
const {OAuth2Client} = require('google-auth-library');
class Auth {

    static async register (req, res, next) {
        try {
            console.log(`register field`)
            const { name, email, password, } = req.body
            console.log(name, email, password)
            let photoUrl = req.body.photoUrl
            !photoUrl ? photoUrl = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" : photoUrl = photoUrl
            console.log(photoUrl)
            let newUser = await User.create({
                name,
                email,
                password,
                photoUrl,
            })
            console.log(newUser);
            res.status(201).json({ 
                id: newUser.id,
                email: newUser.email,
                message: `register as Admin ${newUser.name} successfully`
            })
        } catch (err) {
            next(err)
        }
    }

    static async login (req, res, next) {
        try {
            console.log(req.body, `reqBody`)
            if (!req.body.email) {
                console.log(`email`);
                throw { 
                    name: `Login Failed`, 
                    message: `Invalid Login. Email is required`
                }
            }
            if (!req.body.password) {
                console.log(`password`);
                throw { 
                    name: `Login Failed`, 
                    message: `Invalid Login. Password is required`
                }
            }
            console.log(req.body, "<<<<<<<<<<1111");
            let emailLogin = req.body.email
            let passwordLogin = req.body.password
            let userLogin = await User.findOne({
                where: {
                    email : emailLogin
                }
            })
            console.log(userLogin, `masuk userlogin`);
            if (userLogin) {
                let isValidPassword = compare(passwordLogin, userLogin.password)
                console.log(isValidPassword)
                if (isValidPassword) {
                    let tokenPayload = { id: userLogin.id, email: userLogin.email, role: userLogin.role}
                    let access_token = signToken(tokenPayload)
                    res.status(200).json({ 
                        message: `Login Successful`, 
                        userId: userLogin.id,
                        name: userLogin.name,
                        role: userLogin.role,
                        email: userLogin.email,
                        access_token
                    })
                } else {
                    throw { name: "Unauthorize"}
                }
            } else {
                throw { name: "Unauthorize"}
            }
        } catch (err) {
            console.log(err);
            next(err)
        }

    }

    static async checkToken (req, res, next) {
        console.log(`asdsa`);
        try {
            let { access_token } = req.headers;
            console.log(`masuk checktoken`)
            if (!access_token) {
                throw { name: `Invalid Token`}
            }
            const payload = verifyToken(access_token)
            console.log(payload, "asdasdas")
            const response = await User.findOne ({ where: {email: payload.email}})
            if (!response) {
                throw { name: `Invalid Token`}
            } 
            res.status(200).json({ message: `Token is Valid`})
            
        } catch (err) {
            console.log(err);
            next(err)
        }
    }

    static async googleSignIn (req, res, next) {
        try {
            const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
            const { id_token } = req.body
            if (!id_token) {
                throw { name: `JsonWebTokenError`}
            }

            let secretKey = process.env.GOOGLE_CLIENT_ID
            const ticket = await client.verifyIdToken({
                idToken: id_token,
                audience: secretKey,
            });
            const payload = ticket.getPayload();
            const { name, email} = payload

            let randomPasswordGenerator = (Math.random() + 1).toString(36).substring(0,12);

            console.log(randomPasswordGenerator, "PLOKPLOK")
            const [userLoginGoogle, isCreated] = await User.findOrCreate({
                where: {
                    email,
                },
                defaults: {
                    name: name,
                    email: email,
                    password: randomPasswordGenerator,
                    address: "Update your Address"
                }
            })
            
            let status = 200;
            if (isCreated) {
                status = 201;
            }
            let tokenPayload = { username:userLoginGoogle.id, id: userLoginGoogle.id, email: userLoginGoogle.email, role: userLoginGoogle.role}
            // console.log(payload)
            let access_token = signToken(tokenPayload)
            res.status(status).json({ 
                message: `Google User, Signed in successfully`, 
                userId: userLoginGoogle.id, access_token: access_token,
                username: userLoginGoogle.username,
                photoUrl: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            })
            
        } catch (err) {
            next(err)
        }
    }
}

module.exports = Auth