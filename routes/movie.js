const express = require("express");
const MovieController = require("../controllers/movieController");
const router = express.Router();
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");
// const upload = multer();


module.exports = router;