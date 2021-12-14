const router = require("express").Router();
const userRouter = require("../routes/userRouter");
const errorHandler = require("../middlewares/errorHandler");
const authentication = require("../middlewares/authentication");

router.use("/users", userRouter);
router.use(authentication);
router.use(errorHandler);

module.exports = router;
