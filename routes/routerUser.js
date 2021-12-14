const router = require('express').Router()
const Controller = require('../controllers/controllerUser')
router.post('/register', Controller.register)

module.exports = router