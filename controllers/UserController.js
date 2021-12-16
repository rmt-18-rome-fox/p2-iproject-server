const { User, Profile } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { createToken } =require('../helpers/jwt'); 
const { main } = require('../helpers/nodemailer')
const { makeRandomString } = require('../helpers/validateCodeGenerator')
const login = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const loginUser = await User.findOne({where: {
            email
        }})
        if (!loginUser) throw {name: 'unauthorized'}
        
        const isValid = await comparePassword(password, loginUser.password)
        if (!isValid) throw {name: 'unauthorized'}
        
        if (!loginUser.status) throw {name: 'VALIDATE_YOUR_ACCOUNT'}

        let payload = {
            id: loginUser.id,
            email: loginUser.email,
            role: loginUser.role
        }
        let access_token = await createToken(payload)
        res.status(200).json({access_token, role: payload.role})
    } catch (err) {
        next(err)
    }
    

}

const register = async (req, res, next) => {
    const { email, password, role } = req.body
    console.log(email, password, role)
    try {
        if (role !== 'architect' && role !== 'customer' && role !== 'admin') {
            throw { name: 'ROLE_INVALID' }
        } else {
            const validateCode = makeRandomString(255)
            const newUser = await User.create({ email, password, role, status: false, validateCode })

            let output = {
                email: newUser.email,
                role: newUser.role
            }

            Profile.create({
                name: null,
                phoneNumber: null,
                description: null,
                imageUrl: null,
                address: null,
                price: null,
                UserId: newUser.id,
            })
            main(validateCode, newUser.email)
            res.status(201).json(output)
        }
    } catch (err) {
        next(err)
    }
}

const validate = (req, res, next) => {
    const {validate} = req.query
    User.findOne({where: {
        validateCode: validate
    }})
        .then(data => {
            if (!data) throw {name: 'INVALID_CODE'}
            if (data.status == true) throw {name: 'ACCOUNT_ALREADY_VERIFIED'}
            else {
                return User.update({status: true}, {
                    where: {
                        validateCode: validate
                    }
                })
            }
        })
        .then(data => {
            res.status(200).json({message: 'Account Verified'})
        })
        .catch(err => {
            next(err)
        })
}

module.exports = {
    login,
    register,
    validate
}