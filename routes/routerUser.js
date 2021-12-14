const router = require('express').Router()
const Controller = require('../controllers/controllerUser')
router.post('/register', Controller.register)
router.post('/login', Controller.login)

module.exports = router