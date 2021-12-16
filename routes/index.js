const router = require('express').Router()
const routerUser = require('./routerUser')
const routerWatchList = require('./routerWatchList')
const errorHandlers = require('../middleware/errorHandlers')
const authentication = require('../middleware/authentication')
const ControllerSynopsisReader = require('../controllers/ControllerSynopsisReader')

router.get('/synopsis-reader', ControllerSynopsisReader.synopsisReader)
router.use(routerUser)

router.use(authentication)
router.use(routerWatchList)

router.use(errorHandlers)
module.exports = router