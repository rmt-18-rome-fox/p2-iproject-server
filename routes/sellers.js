const router = require("express").Router();
const ControllerSeller = require("../controllers/controllerSeller");

router.post("/register", ControllerSeller.register);

module.exports = router;
