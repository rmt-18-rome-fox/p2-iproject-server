const RecipeController = require('../controllers/recipe')

const router = require('express').Router()

router.get ('/', RecipeController.showRecipe)
router.get ('/detail/:id', RecipeController.showDetail)



module.exports= router

