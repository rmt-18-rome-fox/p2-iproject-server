const express = require("express");
const CustomerController = require("../controllers/customerController");
const router = express.Router();
const authentication = require("../middlewares/authentication");
const customerOnly = require("../middlewares/customerOnly");


module.exports = router;
