const router = require('express').Router()
const Controller = require('../controllers/controllerWatchList')
const authorization = require('../middleware/authorization')

router.get('/watchlists', Controller.getWatchLists)
router.post('/watchlists', Controller.postWatchList)
router.patch('/watchlists/:JikanAnimeId', authorization, Controller.patchStatusWatchList)
router.delete('/watchlists/:JikanAnimeId', authorization, Controller.deleteWatchList)

module.exports = router