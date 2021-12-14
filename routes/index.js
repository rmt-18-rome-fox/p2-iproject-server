const router = require("express").Router();
const apis = require("./apis");
const customers = require("./customers");
const sellers = require("./sellers");
const users = require("./users");
const { errorHandler } = require("../middlewares/errorHandler");

router.get("/", (req, res) => res.send("8ooks API Running"));

router.use("/users", users);
router.use("/customers", customers);
router.use("/sellers", sellers);
router.use("/apis", apis);

router.use(errorHandler);

module.exports = router;
