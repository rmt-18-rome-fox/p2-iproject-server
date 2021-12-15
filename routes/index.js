const express = require('express')
const router = express.Router()
const Controller = require('../controllers/controllers')
const CustomerController = require('../controllers/CustomerController')
const upload = require('../middleware/multer')
const {  uploadImagekit } = require('../middleware/imgaekit')
const {authentication} = require('../middleware/authentication')


router.post('/register', Controller.register)
router.post('/login',Controller.login)


router.get('/hero',Controller.getHero)
router.get('/superhero',Controller.getSuperHero)
router.get('/hero/:id',Controller.getHeroId)
router.post('/hero',upload.single("image"),uploadImagekit,authentication,Controller.addHero)

router.post('/customer/register', CustomerController.registerCustomer)
router.post('/customer/login', CustomerController.loginCustomer)



module.exports = router