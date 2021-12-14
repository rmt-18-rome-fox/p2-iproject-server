const router = require("express").Router();
const ControllerUser = require("../controllers/controllerUser");

router.post("/login", ControllerUser.login);

module.exports = router;
