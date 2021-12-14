const { User } = require('../models');

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
        
    } catch (err) {
        next(err);
    }
}

module.exports = { register, login }