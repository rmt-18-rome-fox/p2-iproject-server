const router = require("express").Router();
const UserController = require("../controllers/UserController");
const CharController = require("../controllers/CharController");
const authenticate = require("../middlewares/authenticate");
const APIController = require("../controllers/APIController");

router.post("/register", UserController.register);
router.post("/login", UserController.login);

//api calling purpose
router.get("/classes", APIController.getClasses);
router.get("/races", APIController.getRaces);
router.get("/spells", APIController.getSpells);
router.get("/avatar");

router.use(authenticate);
router.get("/user/characters", CharController.getCharacters);
router.post("/user/characters", CharController.addCharacter);

module.exports = router;
