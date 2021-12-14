const express = require('express');
const Auth = require('../controllers/auth');
const errorHandler = require('../middlewares/errorHandler');
const router = express.Router()

router.post('/register', Auth.register)
router.post('/login', Auth.login)

router.use(errorHandler)

module.exports = router