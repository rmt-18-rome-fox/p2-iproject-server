const router = require("express").Router();
const ControllerApis = require("../controllers/controllerApis");
const {
  authorizationCustomerOnly,
} = require("../middlewares/authorizationUser");
const { authentication } = require("../middlewares/authentication");

router.get("/cities", ControllerApis.cities);
router.post("/xendit/callback", ControllerApis.xenditCallback);

router.use(authentication);

router.post("/shipping", ControllerApis.shipping);
router.post("/topup/ewallet", ControllerApis.topUpEwallet);

module.exports = router;
