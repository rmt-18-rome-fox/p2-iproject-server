const router = require("express").Router();
const { errorHandler } = require("../middlewares/errorHandler");
const information = require("./information");

router.get("/", (req, res) => {
  res.send("Welcome to 8ooks REST API");
});

router.use("/information", information);

router.use(errorHandler);

module.exports = router;
