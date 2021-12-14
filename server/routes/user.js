const { addFavourite, editNote, showFavourite } = require('../controllers/favourite')

const router = require('express').Router()

router.get ('/favourites', showFavourite )
router.get ('/favourites/:id', addFavourite )
router.patch ('/editNote', editNote)


module.exports= router