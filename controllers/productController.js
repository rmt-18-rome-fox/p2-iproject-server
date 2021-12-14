const { Product, Category, User, Favorite} = require('../models')
const format = require('../helpers/currency')
const nodemailer = require("nodemailer");

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

    static async checkout(req, res, next) {
        try {
            // console.log('MASUK');
            let UserId = req.user.id
            let email = req.user.email
            let username = req.user.username

            const response = await Favorite.findAll({
                where: {
                    UserId
                },
                include : Product
            })

            let detailPrice = await response.map(product => {
                return product.Product.price++
            })

            let detailName = await response.map(product => {
                return product.Product.name
            })

            const reducer = (previousValue, currentValue) => previousValue + currentValue

            let totalPrice = detailPrice.reduce(reducer)

            // MIDTRANS

            // console.log(response);
            // let checkout = await response.forEach(product => {
            //     Product.decrement(
            //         {
            //             stock: 1
            //         },
            //         {
            //             where: {
            //                 id: product.ProductId
            //             }
            //         })
            // })

            let transporter = nodemailer.createTransport({
                service:  'gmail', 
                auth: {
                  user: 'tokomovieh8@gmail.com', 
                  pass: 'ToKoMovieH8!', 
                },
              });
              let notif = {
                from: 'tokomovieh8@gmail.com', // sender address
                to: email, // list of receivers
                subject: "Succesfull Buy  ✔", // Subject line
                text: `Hello ${username}, Thank you for buy our stuff!
This is your invoice
You have bought these stuff :
    • ${detailName.join('\n    • ')}
With total cost ${format(totalPrice)}
`
              }
     
            transporter.sendMail(notif, (err, data) => {
                if (err) {
                    console.log(`Email not send`);  
                }else {
                    console.log(`Email has been sent`);
                }
            });
 
            // res.status(200).json(`You have to pay : ${format(totalPrice)}`)
            res.status(200).json('Thank you for buy our stuff!')
            } catch (err) {
            console.log(err);
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