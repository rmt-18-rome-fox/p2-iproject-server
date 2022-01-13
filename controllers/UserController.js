const { User } = require('../models');
const secretKey = process.env.SECRETKEY;
const { OAuth2Client } = require('google-auth-library');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const nodemailer = require('nodemailer');

const register = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (user) throw { name: 'UniqueEmail' };
        else {
            const newUser = await User.create({ email, password });
            const myEmail = process.env.EMAIL;
            const myPassword = process.env.PASSWORD;
    
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: myEmail,
                    pass: myPassword
                }
            })
    
            const notification = {
                from: myEmail,
                to: email,
                subject: 'Welcome to Hallita!',
                text: 'Hello! We are really glad to welcome you aboard.\nYou can help manage your life right away using our app!'
            }
    
            let notif;
            transporter.sendMail(notification, (err, data) => {
                if (err) {
                  throw { name: 'FailedEmailNotif' }
                } else {
                    notif = 'We have emailed you a warm welcome!'
                }
            })
    
            res.status(201).json({
                id: newUser.id,
                email: newUser.email,
                notif: notif
            });
        }
    } catch (err) {
        next(err);
    }
}

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email) throw { name: 'EmailRequired' };
        else if (!password) throw { name: 'PassRequired' };

        const user = await User.findOne({ where: { email } });
        if (!user) throw { name: 'Unauthorized' };

        const passValidation = bcrypt.compareSync(password, user.password);
        if (!passValidation) throw { name: 'Unauthorized' };

        const payload = {
            id: user.id,
            email: user.email
        }

        const access_token = jwt.sign(payload, secretKey);

        res.status(200).json({ access_token, payload });
    } catch (err) {
        next(err);
    }
}

const authGithub = async (req, res, next) => {
    if (!req.body.code) {
        throw { name: 'githubNoCode' }
    }

    axios({
        url: 'https://github.com/login/oauth/access_token',
        method: 'post',
        data: {
            code: req.body.code,
            client_id: 'ade64a4c4836b49e76eb',
            client_secret: '08cd23d7c3c8e0c190222553fa1d0518d7b24106',
            redirect_uri: 'https://hallita-kanban.web.app/login/auth-github'
        },
    })
        .then(resp => {
            const access_token = resp.data.split(/=|&/)[1];

            return axios({
                url: 'https://api.github.com/user',
                method: 'get',
                headers: {
                    Authorization: `token ${access_token}`
                }
            })
            .then(resp => {
                let githubEmail = resp.data.email;
                if (!githubEmail) {
                    githubEmail = `${resp.data.login}@mail.com`
                }
                const checkUser = User.findOrCreate({
                    where: {
                        email: githubEmail
                    },
                    defaults: {
                        email: githubEmail,
                        password: githubEmail
                    }
                })
                  .then(resp => {
                      const payloadUser = {
                          id: resp[0].id,
                          email: resp[0].email
                      }
                      const access_token = jwt.sign(payloadUser, secretKey);
      
                      res.status(200).json({ access_token });
                  })
            })
        })
        .catch(err => {
            next(err);
        })
}

const authGoogle = async (req, res, next) => {
    try {
        const { idToken } = req.body;
        const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
        const ticket = await client.verifyIdToken({
            idToken,
            audience: process.env.GOOGLE_CLIENT_ID
        })
        const payload = ticket.getPayload();
        
        const user = await User.findOrCreate({
            where: {
                email: payload.email
            },
            defaults: {
                email: payload.email,
                password: payload.email
            }
        })
    
        const payloadUser = {
            id: user[0].id,
            email: user[0].email
        }
    
        const access_token = jwt.sign(payloadUser, secretKey);
    
        res.status(200).json({ access_token, payloadUser });
        } catch (err) {
            next(err);
        }
}

module.exports = { register, login, authGoogle, authGithub }