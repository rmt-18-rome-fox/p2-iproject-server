const router = require('express').Router()
const adminRouter = require('./admin')
const architectRouter = require('./architect')
const customerRouter = require('./customer')
const {login, register} = require('../controllers/UserController')

router.post('/login', login)
router.post('/register', register)
router.use('/admin', adminRouter)
// router.use('/architect', architectRouter)
// router.use('/customer', customerRouter)

module.exports = router