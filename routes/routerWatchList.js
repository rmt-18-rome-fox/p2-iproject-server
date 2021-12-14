const router = require('express').Router()
const Controller = require('../controllers/controllerWatchList')

router.post('/watchlists', Controller.postWatchList)

module.exports = router