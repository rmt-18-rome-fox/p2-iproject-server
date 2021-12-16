const router = require("express").Router()
const RecipeController = require("../controllers/recipeController")

router.get("/", RecipeController.fetchRecipes)

module.exports = router