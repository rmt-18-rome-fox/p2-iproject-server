const CustomerController = require('../controllers/CustomerController')
const PortofolioController = require('../controllers/PortofolioController')
const router = require('express').Router()
const {imageValidation} = require('../middlewares/imageValidation') //middleware
const {imageKit} = require('../middlewares/imageKit')
const {customerAuthorization} = require('../middlewares/authorization')
const multer = require('multer');
const storage = multer.memoryStorage()
const upload = multer({
    storage: storage,
});


router.get('/', customerAuthorization, CustomerController.fetchFeaturedArchitect) // home
router.get('/architects', customerAuthorization, CustomerController.fetchArchitects) // customer architect page
router.get('/portofolios', customerAuthorization, PortofolioController.fetchPortofolios) // customer portofolios page
router.get('/architects/:architectId', customerAuthorization, CustomerController.architectDetails) // get architect detail from customer
router.get('/portofolios/:portofolioId', customerAuthorization, PortofolioController.fetchOnePortofolio) // get postofolio detail from customer
router.post('/consultation/:architectId', customerAuthorization, CustomerController.addBooking) // belum di tes
router.get('/profile', customerAuthorization, CustomerController.getProfile) // get customer profile
router.put('/profile', customerAuthorization, upload.single('file'), imageValidation, imageKit, CustomerController.editProfile) // edit customer profile
router.get('/architects/portofolios/:architectId', customerAuthorization, PortofolioController.architectPortofolios) // customer architect detail

module.exports = router