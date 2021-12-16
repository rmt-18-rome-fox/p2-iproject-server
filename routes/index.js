const router = require("express").Router();
const userRouter = require("../routes/userRouter");
const errorHandler = require("../middlewares/errorHandler");
const authentication = require("../middlewares/authentication");
const postRouter = require("../routes/postrouter");

router.use("/users", userRouter);
router.use(authentication);
router.use("/posts", postRouter);
router.use(errorHandler);

module.exports = router;
