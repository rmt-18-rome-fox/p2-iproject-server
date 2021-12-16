const router = require("express").Router()
const recipeRouter = require("./recipe")
const errorHandler = require("../middleware/errorHandler")

router.use("/foodify", recipeRouter)

router.use(errorHandler)

module.exports = router