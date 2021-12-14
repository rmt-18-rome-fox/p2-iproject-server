const router = require('express').Router()
const Controller = require('../controllers/controllerWatchList')
const authorization = require('../middleware/authorization')

router.post('/watchlists', Controller.postWatchList)
router.patch('/watchlists/:JikanAnimeId', authorization, Controller.patchStatusWatchList)

module.exports = router