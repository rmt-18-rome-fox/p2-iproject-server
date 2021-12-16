const { Admin } = require(`../models/index`)
const { getToken } = require(`../helpers/jwt`)
const { compareHash } = require(`../helpers/bycrpt`)

let adminRegister = async (req, res, next) => {
    try {
        const {  email, password } = req.body
        const addAdmin = await Admin.create({ email, password });
        res.status(201).json({
            id: addAdmin.id,
            email: addAdmin.email
        });
    } catch (error) {
        next(error);
    }
};

let adminLogin = async (req, res, next) => {
    try {
        const {  email, password } = req.body
        const findAdmin = await Admin.findOne({
            where: {
                email: email
            }
        });

        if (!findAdmin) throw { name: `ADMIN_NOT_FOUND` }

        const verfyPass = compareHash(password, findAdmin.password)

        if (!verfyPass) throw { name: `ADMIN_NOT_FOUND` }

        const payload = {
            id: verfyPass.id
        }

        const access_token = getToken(payload)

        res.status(201).json({access_token});
    } catch (error) {
        next(error);
    }
};

module.exports = {
    adminRegister,
    adminLogin
}