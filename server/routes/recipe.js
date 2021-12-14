const RecipeController = require('../controllers/recipe')

const router = require('express').Router()

router.get ('/', RecipeController.showRecipe)

module.exports= router