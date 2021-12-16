const router = require("express").Router()
const recipeRouter = require("./recipe")
const authRouter = require("./auth")
const errorHandler = require("../middleware/errorHandler")

router.use("/", authRouter)
router.use("/foodify", recipeRouter)

router.use(errorHandler)

module.exports = router