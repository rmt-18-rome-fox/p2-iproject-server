const router = require('express').Router()
const routerUser = require('./routerUser')
const routerWatchList = require('./routerWatchList')
const errorHandlers = require('../middleware/errorHandlers')
const authentication = require('../middleware/authentication')
const ControllerSynopsisReader = require('../controllers/ControllerSynopsisReader')
const ControllerJikan = require('../controllers/ControllerJikan');

router.get('/anime', ControllerJikan.getAnime)
router.get('/anime/:jikanAnimeId', ControllerJikan.getAnimeDetail)
router.post('/synopsis-reader', ControllerSynopsisReader.synopsisReader)

router.use(routerUser)

router.use(authentication)
router.use(routerWatchList)

router.use(errorHandlers)
module.exports = router