const router = require("express").Router();
const ControllerUser = require("../controllers/controllerUser");

router.post("/login", ControllerUser.login);
router.get("/books", ControllerUser.books);

module.exports = router;
