const router = require("express").Router();
const ControllerApis = require("../controllers/controllerApis");
const {
  authorizationCustomerOnly,
} = require("../middlewares/authorizationUser");

router.get("/cities", ControllerApis.cities);
router.post("/shipping", authorizationCustomerOnly, ControllerApis.shipping);

module.exports = router;
