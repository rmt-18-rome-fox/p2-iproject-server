const UserAccount = require('../controllers/User')
const authentication = require('../middleware/authentication')
const user = require('./user')

const router = require('express').Router()
const recipe = require("./recipe")

router.post ("/register", UserAccount.register)
router.post ("/login", UserAccount.login)
router.use ("/recipes", recipe)
router.use (authentication)
router.use ("/users", user)

module.exports = router