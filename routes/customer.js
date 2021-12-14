const CustomerController = require('../controllers/CustomerController')
const PortofolioController = require('../controllers/PortofolioController')
const router = require('express').Router()

router.get('/', CustomerController.fetchFeaturedArchitect) // home
router.get('/architects', CustomerController.fetchArchitects) // customer architect page
router.get('/portofolios', PortofolioController.fetchPortofolios) // customer portofolios page

module.exports = router