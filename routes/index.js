const router = require('express').Router()
const routerUser = require('./routerUser')
const routerWatchList = require('./routerWatchList')
const errorHandlers = require('../middleware/errorHandlers')

router.use(routerUser)
router.use(routerWatchList)

router.use(errorHandlers)
module.exports = router