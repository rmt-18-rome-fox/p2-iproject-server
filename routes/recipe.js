const router = require("express").Router()
const RecipeController = require("../controllers/recipeController")


router.get("/", RecipeController.fetchRecipes)
router.get("/recipe-reader", RecipeController.recipeReader)

module.exports = router