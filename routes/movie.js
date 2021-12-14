const express = require("express");
const MovieController = require("../controllers/movieController");
const router = express.Router();
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

router.get('/',MovieController.getMovies)
router.get('/:mid',MovieController.getByPk)

module.exports = router;