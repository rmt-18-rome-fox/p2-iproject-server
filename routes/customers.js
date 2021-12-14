const router = require("express").Router();
const ControllerCustomer = require("../controllers/controllerCustomer");
const { authentication } = require("../middlewares/authentication");

router.post("/register", ControllerCustomer.register);

router.use(authentication);

router.get("/carts", ControllerCustomer.carts);
module.exports = router;
