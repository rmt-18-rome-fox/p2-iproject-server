const { User } = require('../models');
const { signPayload } = require('../helpers/jwt');
const { compare } = require('../helpers/bcrypt');

class Controller {
    static async register(req, res, next) {
        try {
            const dataRegister = {
                name: req.body.name,
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                role: 'admin',
            }

            const newUser = await User.create(dataRegister);
            const dataNewUser = {
                name: newUser.name,
                username: newUser.username,
                email: newUser.email
            }

            res.status(201).json(dataNewUser);
        } catch (err) {
            next(err)
        }
    }

    static async login(req, res, next) {
        try {
            const {username, password} = req.body;

            const findUser = await User.findOne({
                where: {username}
            });
            if(!findUser) {
                throw {name: 'UserNotFound'};
            }

            const isValid = compare(password, findUser.password);
            if(!isValid) {
                throw {name: 'UserNotFound'};
            }

            const user = {
                id: findUser.id,
                username: findUser.username,
                email: findUser.email
            }

            const payload = {
                id: findUser.id,
                username: findUser.username,
            }
            const token = signPayload(payload, isValid);
            res.status(200).json({access_token: token, dataUser: user});

        } catch (err) {
            next(err)
        }
    }

    static async fansRegister(req, res, next) {
        try {
            const dataRegister = {
                name: req.body.name,
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                role: 'fans',
            }

            const newUser = await User.create(dataRegister);
            const dataNewUser = {
                name: newUser.name,
                username: newUser.username,
                email: newUser.email
            }

            res.status(201).json(dataNewUser);
        } catch (err) {
            next(err)
        }
    }
}

module.exports = Controller;