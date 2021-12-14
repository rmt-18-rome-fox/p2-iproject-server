const router = require('express').Router()
const UserController = require ('../controllers/userController.js')
const DataController = require('../controllers/dataController')
const { authentication } = require('../middleware/authentication.js')
const {errorHandler} = require('../middleware/errorHandler')


router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.use(authentication)

router.get('/juzz', DataController.getAllJuzz)
router.get('/juzz/:juzsNumber', DataController.getAyahByJuzs)

router.use(errorHandler)



module.exports = router