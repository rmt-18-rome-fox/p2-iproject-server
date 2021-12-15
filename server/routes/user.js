const FavouriteFood = require("../controllers/favourite")
const { createInvoice } = require("../controllers/payment")
const authentication = require("../middleware/authentication")
const authorization = require('../middleware/authorization')

const router = require('express').Router()

router.use (authentication)
router.post ('/favourites/:id',FavouriteFood.addFavourite )
router.get('/subscribe', createInvoice)
router.use(authorization)
router.get ('/favourites', FavouriteFood.showFavourite)


module.exports= router