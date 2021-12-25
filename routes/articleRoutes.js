const router = require('express').Router()
const articleController = require('../controllers/articleController')
const userAuthentication = require('../middlewares/authentication')
const {adminAuthorization, commentAuthorization} = require('../middlewares/authorization')
const instanceMulter = require('../middlewares/multer')
const imageKitUpload = require('../middlewares/imagekit')

router.get("/articles", articleController.getArticles)
router.post("/articles/mediastack", articleController.mediastackRoute)
router.post("/articles/nytimes", articleController.nytimesRoute) 
router.get("/articles/:id", articleController.getArticleDetail)

router.use(userAuthentication)

// router.post("/articles", adminAuthorization, instanceMulter.single('imageUrl'), imageKitUpload, articleController.createArticle)
router.post("/articles", adminAuthorization, articleController.createArticle)

router.put("/articles/:id", adminAuthorization, instanceMulter.single('imageUrl'), imageKitUpload, articleController.editArticle)
router.delete("/articles/:id", adminAuthorization, articleController.deleteArticle)
router.post("/articles/:id/comments", articleController.addComment)
router.delete("/articles/:id/comments/:commentId", commentAuthorization, articleController.deleteComment)

module.exports = router