const express = require("express");
const UserController = require("../controllers/userController");
const router = express.Router();

router.post("/register", UserController.registerPost);
router.post("/login", UserController.loginPost);

module.exports = router;
