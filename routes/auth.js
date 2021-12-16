const router = require('express').Router()
const AuthController = require('../controllers/userController')

router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.post('/google-login', AuthController.googleLogin)

module.exports = router
