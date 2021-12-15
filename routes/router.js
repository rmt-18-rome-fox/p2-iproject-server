const router = require("express").Router();
const UserController = require("../controllers/UserController");
const CharController = require("../controllers/CharController");

router.post("/register");
router.post("/login");

//api calling purpose
router.get("/classes");
router.get("/races");
router.get("/spells");
router.get("/getImage");

router.get("/user/characters");
router.post("/user/characters");
