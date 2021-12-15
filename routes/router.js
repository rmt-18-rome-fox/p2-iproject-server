const router = require("express").Router();
const UserController = require("../controllers/UserController");
const CharController = require("../controllers/CharController");
const authenticate = require("../middlewares/authenticate");

router.post("/register", UserController.register);
router.post("/login", UserController.login);

//api calling purpose
router.get("/classes");
router.get("/races");
router.get("/spells");
router.get("/getImage");

router.use(authenticate);
router.get("/user/characters", CharController.getCharacters);
router.post("/user/characters", CharController.addCharacter);

module.exports = router;
