const router = require("express").Router();
const UserController = require("../controllers/UserController");
const CharController = require("../controllers/CharController");

router.post("/register", UserController.register);
router.post("/login", UserController.login);

//api calling purpose
router.get("/classes");
router.get("/races");
router.get("/spells");
router.get("/getImage");

router.get("/user/characters");
router.post("/user/characters");
