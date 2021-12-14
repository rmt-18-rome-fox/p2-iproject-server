const router = require("express").Router();
const userRouter = require("../routes/userRouter");

router.use("/users", userRouter);

module.exports = router;
