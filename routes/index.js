const router = require("express").Router()
const recipeRouter = require("./recipe")
const authRouter = require("./auth")
const errorHandler = require("../middleware/errorHandler")
const authentication = require("../middleware/authentication")

router.use("/", authRouter)
router.use("/foodify", recipeRouter)
router.use(authentication)
router.use("/favourites")

router.use(errorHandler)

module.exports = router