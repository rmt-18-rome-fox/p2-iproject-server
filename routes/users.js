const router = require("express").Router();
const ControllerUser = require("../controllers/controllerUser");
const { authentication } = require("../middlewares/authentication");

router.post("/login", ControllerUser.login);
router.use(authentication);
router.get("/books", ControllerUser.books);

module.exports = router;
