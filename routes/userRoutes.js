const router = require('express').Router()
const userController = require('../controllers/userController')

router.post("/admins/register", userController.adminRegister)
router.post("/admins/login", userController.adminLogin)
router.post("/users/register", userController.userRegister)
router.post("/users/login", userController.userLogin)

module.exports = router