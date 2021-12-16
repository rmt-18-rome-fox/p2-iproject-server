const { deleteFavourite, editNote, getFavouriteByRecipeId } = require("../controllers/favourite")
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
router.get('/favourites/recipe/:id', getFavouriteByRecipeId)
router.patch ('/favourites/:id', editNote)
router.delete ('/delete/:id', deleteFavourite)

module.exports= router