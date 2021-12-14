const express = require('express')
const router = express.Router()
// const { verifyToken } = require('../helpers/jwt')

const userController = require('../controllers/userController')
const productController = require('../controllers/productController')
const categoryController = require('../controllers/categoryController')
const customerController = require('../controllers/customerController')
const middleware = require('../middlewares/middleware')
const errorHandler = require('../middlewares/errorHandler')
const iMulter = require('../middlewares/multer')
const imageKit = require('../middlewares/imageKit')
const imageValidation = require('../middlewares/imageValidation')



router.post(
    '/register', 
    userController.register
    )

router.post(
    '/authGoogle', 
    userController.authGoogle
    )
 
router.post(
    '/login', 
    userController.login
    )

router.post('/public/register', 
    customerController.register)

router.post('/public/login', 
    customerController.login)

router.post('/public/authGoogle', 
    customerController.authGoogle)

router.get('/public/products', 
    customerController.custProductList )

router.get('/public/products/:id', 
    productController.detailProduct)
 
router.use(middleware.authenticate)

// router.get('/genres', categoryController.showGenre )
// router.post('/genres', categoryController.addGenre)

router.get('/public/favorite', 
    customerController.showFav)

router.post('/public/favorite/:id', 
    customerController.addFav)
    
router.get(
    '/products', 
    productController.showProduct
    )

router.post(
    '/products',
    iMulter,
    imageValidation,
    imageKit.sentImage,
    productController.addProduct
    )

router.patch(
    '/products/:id',
    middleware.authorization, 
    productController.updateStatus)

// router.get(
//     '/products/:id', 
//     productController.detailProduct
//     )

router.put(
    '/products/:id',
    middleware.authorization,
    iMulter,
    imageValidation,
    imageKit.sentImage,
    productController.updateProduct
    )

router.delete(
    '/products/:id',
    middleware.authorization,
    productController.delete
    )

router.use(errorHandler.errHandler)



module.exports = router
