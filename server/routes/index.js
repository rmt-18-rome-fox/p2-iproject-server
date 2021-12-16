const UserAccount = require('../controllers/User')
const user = require('./user')

const router = require('express').Router()
const recipe = require("./recipe")

router.post ("/register", UserAccount.register)
router.post ("/login", UserAccount.login)
router.use ("/recipes", recipe)
router.use ("/users", user)

module.exports = router