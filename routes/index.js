const router = require('express').Router()
const routerUser = require('./routerUser')
const routerWatchList = require('./routerWatchList')

router.use(routerUser)
router.use(routerWatchList)

module.exports = router