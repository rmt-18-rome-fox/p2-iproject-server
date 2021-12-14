const express = require('express')
const router = express.Router()
const Controller = require('../controllers/controllers')
const CustomerController = require('../controllers/CustomerController')


router.post('/register', Controller.register)
router.post('/login',Controller.login)

router.post('/customer/register', CustomerController.registerCustomer)



module.exports = router