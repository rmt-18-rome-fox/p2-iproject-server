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
router.delete("/carts", ControllerCustomer.deleteCartByQuery);
router.delete("/carts/:id", ControllerCustomer.deleteCart);
router.post("/carts/:bookId", ControllerCustomer.postCart);
router.get("/transactions", ControllerCustomer.transactions);
router.post("/transactions", ControllerCustomer.postTransaction);
router.post("/paymentAuth", ControllerCustomer.paymentAuth);
router.post("/topup", ControllerCustomer.postTopUp);
router.get("/topup", ControllerCustomer.getTopUp);
router.post("/payment", ControllerCustomer.payment);
module.exports = router;
