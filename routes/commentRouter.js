const router = require("express").Router();
const CommentController = require("../controllers/commentController");

router.post("/:postId", CommentController.addComment);

module.exports = router;
