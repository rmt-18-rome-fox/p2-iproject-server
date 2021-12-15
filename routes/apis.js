const router = require("express").Router();
const ControllerApis = require("../controllers/controllerApis");
const {
  authorizationCustomerOnly,
} = require("../middlewares/authorizationUser");

router.get("/cities", ControllerApis.cities);
router.post("/shipping", ControllerApis.shipping);
router.post("/xendit/ovo", ControllerApis.createPayment);
router.post("/xendit/callback", ControllerApis.xenditCallback);

module.exports = router;
