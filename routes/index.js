const express = require('express');
const Auth = require('../controllers/auth');
const authenticate = require('../middlewares/authenticate');
const routerTopic = require('./topic');
const errorHandler = require('../middlewares/errorHandler');
const router = express.Router()

const routerQuote = require('./quotes');

router.post('/register', Auth.register)
router.post('/login', Auth.login)
router.post('/google-signin', Auth.googleSignIn)


router.use(authenticate)
router.use('/quotes', routerQuote)
router.use('/topics', routerTopic)

router.use(errorHandler)

module.exports = router