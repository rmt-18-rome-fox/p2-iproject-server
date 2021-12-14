const express = require('express')
const router = express.Router()
const Controller = require('../controllers/controllers')
const CustomerController = require('../controllers/CustomerController')
const upload = require('../middleware/multer')
const {  uploadImagekit } = require('../middleware/imgaekit')


router.post('/register', Controller.register)
router.post('/login',Controller.login)

router.post('/hero',upload.single("image"),uploadImagekit,Controller.addHero)

router.post('/customer/register', CustomerController.registerCustomer)
router.post('/customer/login', CustomerController.loginCustomer)



module.exports = router