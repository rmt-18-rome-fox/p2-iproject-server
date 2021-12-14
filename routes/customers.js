const router = require("express").Router();
const ControllerCustomer = require("../controllers/controllerCustomer");

router.post("/register", ControllerCustomer.register);

module.exports = router;
