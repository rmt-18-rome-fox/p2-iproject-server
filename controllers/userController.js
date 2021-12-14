const { User, Product, OrderProduct } = require(`../models/index`)
const { getToken } = require(`../helpers/jwt`)
const { compareHash } = require(`../helpers/bycrpt`);
const { Op } = require("sequelize");


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
            id: findUser.id
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

let fetchOrderProduct = async (req, res, next) => {
    try {
        const response = await OrderProduct.findAll({
            where: {
                UserId: req.auth.id
            },
            attributes: {
                exclude: ['createdAt', `updatedAt`]
            },    
            include: {
                model: Product,
                attributes: {
                    exclude: ['createdAt', `updatedAt`, `quantity`]
                },
            }, 
        })

        if (response.length < 1) {
            res.status(200).json({ msg: `there is no orders yet`})
        } else {
            res.status(200).json({response})
        }
    } catch (error) {
        next(error)
    }
}

let addOrderItem = async (req, res, next) => {
    try {

        const { productId } = req.params

        if (!productId) throw { name: "NO_PRODUCT_TO_ADD" }

        const findProduct = await Product.findByPk(productId)

        if (!findProduct) throw { name: "PRODUCT_NOT_FOUND" }

        const response = await OrderProduct.findAll({
            where: {
                UserId: req.auth.id
            },
            attributes: {
                exclude: ['createdAt', `updatedAt`]
            },    
            include: {
                model: Product,
                attributes: {
                    exclude: ['createdAt', `updatedAt`]
                },
                where: {
                    id: productId
                }
            }, 
        })

        if (response.length < 1) {

            console.log(`masuk kah?`)
            
            const addItem = await OrderProduct.create(
                {
                    UserId: req.auth.id,
                    ProductId: findProduct.id,
                    status: `pending`
                }
            )
            res.status(200).json({ msg: `Added ${findProduct.name}` })
        } else {
            res.status(200).json({ msg: `Checkout first before you could order again` })
        }
    } catch (error) {
        next(error)
    }
}

let checkout = async (req, res, next) => {
    try {
        const response = await OrderProduct.findAll({
            where: {
                [Op.and]: [
                    { UserId: req.auth.id }, 
                    { status: `pending` }
                ], 
            },
            attributes: {
                exclude: ['createdAt', `updatedAt`]
            },    
            include: {
                model: Product,
                attributes: {
                    exclude: ['createdAt', `updatedAt`]
                },
            }, 
        })

        if (response.length < 1) {
            res.status(200).json({ msg: `there is no orders yet`})
        } else {

            let orderDerail = { 
                totalPrice: 0,
                product: []
             }

            response.forEach(element => {
                orderDerail.totalPrice += element.Product.price
                orderDerail.product.push(element.Product)
            });

            res.status(200).json({orderDerail})
        }
    } catch (error) {
        next(error)
    }
}

module.exports = {
    register,
    login,
    fetchAllProducts,
    fetchOrderProduct,
    addOrderItem,
    checkout
}