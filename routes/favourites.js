const router = require('express').Router()
const favoriteController = require('../controllers/favoriteController')
const authorization = require('../middleware/authorization')

router.get('/', favoriteController.getFavorite)
router.post('/', favoriteController.postFavorite)
router.delete('/:label', authorization, favoriteController.deleteFavorite)

module.exports = router