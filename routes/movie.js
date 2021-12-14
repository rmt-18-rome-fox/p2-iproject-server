const express = require("express");
const ProductController = require("../controllers/productController");
const router = express.Router();
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");
// const upload = multer();


module.exports = router;