const router = require('express').Router()
const favouriteController = require('../controllers/favouriteController')
const authorize = require('../middlewares/authorization')

router.get('/', authorize.customerAuthorization, bookmarkController.getCustBookmark)
router.post('/:newsId', authorize.customerAuthorization, bookmarkController.postCustBookmark)
router.delete('/:id', authorize.customerAuthorization, bookmarkController.deleteCustBookmark)

module.exports = router