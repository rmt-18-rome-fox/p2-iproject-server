const express = require("express");
const PaymentController = require("../controllers/paymentController");
const router = express.Router();
const authentication = require("../middlewares/authentication");
// const authorization = require("../middlewares/authorization");

router.post("/midtrans", [authentication], PaymentController.midtrans);
router.post("/midtrans/notify", [authentication], PaymentController.midtransSuccess);
// router.post("/:mid", [authentication], BookingController.addBooking);
// router.delete("/:mid", [authentication], BookingController.deleteBooking);

module.exports = router;