const router = require("express").Router();
const ControllerSeller = require("../controllers/controllerSeller");
const { authorizationSellerOnly } = require("../middlewares/authorizationUser");
const { authentication } = require("../middlewares/authentication");

router.post("/register", ControllerSeller.register);

router.use(authentication);
router.use(authorizationSellerOnly);

router.post("/books", ControllerSeller.book);

module.exports = router;
