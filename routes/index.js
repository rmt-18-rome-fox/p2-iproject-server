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


//BUAT ADMIN MASUK TAPI CUMA 1 AJA
router.post(
    '/register', 
    userController.register
    )
// router.post(
//     '/authGoogle', 
//     userController.authGoogle
//     )
router.post(
    '/login', 
    userController.login
    )

//BUAT PUBLIC
router.post('/public/register', 
    customerController.register)

router.post('/public/login', 
    customerController.login)

router.post('/public/authGoogle', 
    customerController.authGoogle)

router.post('/public/auth/facebook',
    customerController.authFacebook)

router.post('/public/auth/github',
    customerController.authGitHub)    

router.get('/public/products', 
    customerController.custProductList )

router.get('/public/products/:id', 
    productController.detailProduct)
 
// MIDDLEWARE AUTHENTICATION
router.use(middleware.authenticate)

//FOR PUBLIC
//SHOW FAVORIT
router.get('/public/favorite', 
    customerController.showFav)
//NAMBAH FAVORIT
router.post('/public/favorite/:id', 
    customerController.addFav)
//NTAR INI BUAT UBAH STOCK TAPI DI PUBLIC
router.put(
    '/public/checkout',
    productController.checkout)

router.post('/charge', async (req, res, next) => {
    try {
        // https://app.sandbox.midtrans.com/snap/v1/transactions
       
        
    } catch (err) {
        console.log(err.response.data);
        // next(err)
    }
})


//FOR ADMIN
router.get(
    '/products', 
    productController.showProduct
    )

//ADD PRODUCT
router.post(
    '/products',
    iMulter,
    imageValidation,
    imageKit.sentImage,
    productController.addProduct
    )


// router.get(
//     '/products/:id', 
//     productController.detailProduct
//     )

// INI BUAT EDIT, CUMA GA KEPAKE KAYAKNYA
// router.put(
//     '/products/:id',
//     middleware.authorization,
//     iMulter,
//     imageValidation,
//     imageKit.sentImage,
//     productController.updateProduct
//     )

// router.delete(
//     '/products/:id',
//     middleware.authorization,
//     productController.delete
//     )

router.use(errorHandler.errHandler)



module.exports = router
