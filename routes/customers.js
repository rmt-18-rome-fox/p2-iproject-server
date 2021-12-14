const router = require("express").Router();
const ControllerCustomer = require("../controllers/controllerCustomer");
const { authentication } = require("../middlewares/authentication");
const {
  authorizationCustomerOnly,
} = require("../middlewares/authorizationUser");

router.post("/register", ControllerCustomer.register);

router.use(authentication);
router.use(authorizationCustomerOnly);

router.get("/carts", ControllerCustomer.carts);
router.post("/carts/:bookId", ControllerCustomer.postCart);
module.exports = router;
