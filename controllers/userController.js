const { User, Product } = require(`../models/index`)
const { getToken } = require(`../helpers/jwt`)
const { compareHash } = require(`../helpers/bycrpt`);


let register = async (req, res, next) => {
    try {
        const {  email, password } = req.body
        const addUser = await User.create({ email, password });
        res.status(201).json({
            id: addUser.id,
            email: addUser.email
        });
    } catch (error) {
        next(error);
    }
};

let login = async (req, res, next) => {
    try {
        const {  email, password } = req.body
        const findUser = await User.findOne({
            where: {
                email: email
            }
        });

        if (!findUser) throw { name: `USER_NOT_FOUND` }

        const verfyPass = compareHash(password, findUser.password)

        if (!verfyPass) throw { name: `USER_NOT_FOUND` }

        const payload = {
            id: verfyPass.id
        }

        const access_token = getToken(payload)

        res.status(201).json({access_token});
    } catch (error) {
        next(error);
    }
};

let fetchAllProducts = async (req, res, next) => {
    try {
    
        const response = await Product.findAll({
            attributes: {
                exclude: ['createdAt', `updatedAt`]
            },    
        })

        res.status(200).json({response})

    } catch (error) {
        next(error)
    }
}

module.exports = {
    register,
    login,
    fetchAllProducts
}