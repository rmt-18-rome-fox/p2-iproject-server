const express = require("express");
const HomeController = require("../controllers/homeController");
const router = express.Router();
const userRoutes = require("./user");
const movieRoutes = require("./movie");
const bookingRoutes = require("./booking");
const errorHandlers = require("../middlewares/errorhandlers");

router.get("/", HomeController.home);
router.use("/products", movieRoutes);
router.use("/bookings", bookingRoutes);
router.use("/users", userRoutes);

router.use(errorHandlers);

module.exports = router;
