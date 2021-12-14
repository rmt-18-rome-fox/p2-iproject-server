const router = require("express").Router();
const ControllerApis = require("../controllers/controllerApis");

router.get("/cities", ControllerApis.cities);
router.post("/shipping", ControllerApis.shipping);

module.exports = router;
