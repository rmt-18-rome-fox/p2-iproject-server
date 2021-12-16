const router = require('express').Router()
const UserController = require ('../controllers/userController.js')
const DataController = require('../controllers/dataController')
const { authentication } = require('../middleware/authentication.js')
const {errorHandler} = require('../middleware/errorHandler')


router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.use(authentication)

router.get('/users', UserController.getUser)
router.get('/juzz', DataController.getAllJuzz)
router.get('/juzz/:juzsNumber', DataController.getAyahByJuzs)
router.get('/chapters', DataController.getAllChapter)
router.get('/chapters/:chapterNumber', DataController.getChapterById)
router.get('/prayerTimes', DataController.getPrayerTimes)
router.use(errorHandler)



module.exports = router