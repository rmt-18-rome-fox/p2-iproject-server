const router = require("express").Router()
const authRouter = require("./auth")
const recipeRouter = require("./recipe")
const favoriteRouter = require("./favourites")
const errorHandler = require("../middleware/errorHandler")
const authentication = require("../middleware/authentication")

router.use("/", authRouter)
router.use("/foodify", recipeRouter)
router.use(authentication)
router.use("/favourites", favoriteRouter)

router.use(errorHandler)

module.exports = router
