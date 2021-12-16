const router = require('express').Router()
const administrationRoutes = require('./administrationRoutes')
const weatherRoutes = require('./weatherRoutes')
const ErrorHandler = require('../middlewares/errorHandler')

router.use('/',administrationRoutes)

router.use('/weather',weatherRoutes)

router.use(ErrorHandler)
module.exports = router