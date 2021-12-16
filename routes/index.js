const router = require('express').Router()
const adminRouter = require('./admin')
const architectRouter = require('./architect')
const customerRouter = require('./customer')
const {login, register, validate} = require('../controllers/UserController')
const { authentication } = require('../middlewares/authentication')
const CustomerController = require('../controllers/CustomerController')
router.post('/login', login)
router.post('/register', register)
router.post('/customer/paymentDone', CustomerController.paymentDone)
router.patch('/validate', validate)

router.use(authentication)
// router.use('/admin', adminRouter)
router.use('/architect', architectRouter)
router.use('/customer', customerRouter)

module.exports = router