const router = require('express').Router()
const articleController = require('../controllers/articleController')
const userAuthentication = require('../middlewares/authentication')
const adminAuthorization = require('../middlewares/authorization')
const instanceMulter = require('../middlewares/multer')
const imageKitUpload = require('../middlewares/imagekit')

router.use(userAuthentication)

router.post("/articles", adminAuthorization, instanceMulter.single('imageUrl'), imageKitUpload, articleController.createArticle)

module.exports = router