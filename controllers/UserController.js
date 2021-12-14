const { User } = require('../models');
const secretKey = process.env.SECRETKEY;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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

module.exports = { register, login }