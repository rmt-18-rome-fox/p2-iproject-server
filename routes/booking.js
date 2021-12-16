const express = require("express");
const BookingController = require("../controllers/bookingController");
const router = express.Router();
const authentication = require("../middlewares/authentication");
// const authorization = require("../middlewares/authorization");

router.get("/", [authentication], BookingController.getBooking);
router.post("/:mid", [authentication], BookingController.addBooking);
router.delete("/:mid", [authentication], BookingController.deleteBooking);

module.exports = router;
