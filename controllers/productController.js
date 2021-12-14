const { Product, Category, User } = require('../models')

class productController {
    static async showProduct(req, res, next) {
        try {
            const response = await Product.findAll({
                include: Category
            })
            res.status(200).json(response)
        } catch (err) {
            next(err)

        }
    }

    static async addProduct(req, res, next) {
        try {
            const imgUrl = req.dataImgUrl
            const UserId = req.user.id
            const { name, description, weight, stock, price, CategoryId } = req.body

            const response = await Product.create({ 
                name, description, imgUrl, weight, stock, price, CategoryId, UserId
            })
            res.status(201).json(response)

        } catch (err) {
            // console.log(err);
            next(err)

        }
    }

    static async detailProduct(req, res, next) {
        try {
            const id = +req.params.id
            const response = await Product.findByPk(id)

            if (!response) {
                throw { name: "notFound" }
            }

            res.status(200).json(response)

        } catch (err) {
            next(err)

        }
    }

    static async updateProduct(req, res, next) {
        try {
            const id = +req.params.id
            const imgUrl = req.dataImgUrl
            const AuthorId = req.user.id
            const { title, synopsis, trailerUrl, rating, CategoryId, } = req.body

            const responseFind = await Product.findByPk(id)

            if (!responseFind) {
                throw { name: "notFound" }
            }

            const response = await Product.update({ 
                title, synopsis, trailerUrl, imgUrl, rating, CategoryId, AuthorId 
            }, {
                where: { id },
                returning: true
            })

            res.status(200).json(response[1][0])
        } catch (err) {
            next(err)

        }
    }

    static async updateStatus(req, res, next) {
        try {
            let id = req.params.id
            let { status } = req.body

            const currentProduct = await Product.findByPk(id)
            let currentStatus = currentProduct.status

            if (req.user.role === 'Admin') {
                if (status !== currentStatus) {
                    const response = await Product.update({
                        status
                    }, {
                        where: {
                            id
                        }
                    })

                    const findProduct = await Product.findOne({
                        where: {
                            id
                        }
                    })
        
                    const createHistory = await History.create({
                        ProductId: findProduct.id,
                        title : findProduct.title,
                        description: `Product with tilte ${findProduct.title} status with ID : ${findProduct.id} has been edited by ${req.user.email}`,
                        updatedBy: req.user.email
                    })

                    res.status(200).json(`Product status has been changed from ${currentStatus} to ${status}`)
                } else {
                    throw { name: "sameStatus" }
                }

            } else {
                throw { name: 'forbidden' }
            }
        } catch (err) {
            next(err)
        }

    }

    static async delete(req, res, next) {
        try {
            const id = +req.params.id
            const response = await Product.destroy({
                where: {
                    id
                }
            })

            if (!response) {
                throw { name: "notFound" }
            }
            res.status(200).json({
                data: { msg: `Product with ID ${response.id} deleted successfully` }
            })

        } catch (err) {
            next(err)

        }
    }
}

module.exports = productController