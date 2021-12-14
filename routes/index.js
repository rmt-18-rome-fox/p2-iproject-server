const router = require('express').Router()
const UserController = require ('../controllers/userController.js')
const {errorHandler} = require('../middleware/errorHandler')


router.post('/register', UserController.register)
router.post('/login', UserController.login)


router.use(errorHandler)



module.exports = router