const router = require("express").Router();
const ControllerInformation = require("../controllers/controllerInformation");

router.get("/cities", ControllerInformation.cities);
router.post("/shipping", ControllerInformation.shipping);

module.exports = router;
