const { deleteFavourite } = require("../controllers/favourite")
const FavouriteFood = require("../controllers/favourite")
const { createInvoice } = require("../controllers/payment")
const {updateStatus } = require("../controllers/User")
const authentication = require("../middleware/authentication")
const authorization = require('../middleware/authorization')

const router = require('express').Router()

router.use (authentication)
router.post ('/favourites/:id',FavouriteFood.addFavourite )
router.get('/subscribe', createInvoice)
router.patch ('/status', updateStatus)
router.use(authorization)
router.get ('/favourites', FavouriteFood.showFavourite)
router.delete ('/delete', deleteFavourite)

module.exports= router