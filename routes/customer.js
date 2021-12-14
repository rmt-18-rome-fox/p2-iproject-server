const { fetchFeaturedArchitect } = require('../controllers/UserController')

const router = require('express').Router()

router.get('/', fetchFeaturedArchitect)

module.exports = router