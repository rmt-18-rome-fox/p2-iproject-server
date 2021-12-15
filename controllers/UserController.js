const { User } = require('../models');
const secretKey = process.env.SECRETKEY;
const { OAuth2Client } = require('google-auth-library');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const axios = require('axios');

const register = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const newUser = await User.create({ email, password });

        res.status(201).json({
            id: newUser.id,
            email: newUser.email
        });
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

        res.status(200).json({ access_token });
    } catch (err) {
        next(err);
    }
}

const githubLogin = async (req, res, next) => {
    if (!req.query.code) {
        throw { name: 'githubNoCode' }
    }

    axios({
        url: 'https://github.com/login/oauth/access_token',
        method: 'post',
        client_id: '5b3c8f13cf108325a665',
        code: req.query.code,
        client_secret: '5b3c8f13cf108325a665'
    })
        .then(resp => {
        //   res.status(200).json({
        //       access_token
        //   })
        console.log(resp)
        })
        .catch(err => {
            console.log(err)
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
    
        res.status(200).json({ access_token });
        } catch (err) {
            next(err);
        }
}

module.exports = { register, login, authGoogle }