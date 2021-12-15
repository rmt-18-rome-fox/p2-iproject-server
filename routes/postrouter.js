const router = require("express").Router();
const postController = require("../controllers/postController");
const upload = require("../middlewares/multer");
const postCloudinary = require("../middlewares/cloudinary");
const CommentController = require("../controllers/commentController");
const authorizationComment = require("../middlewares/authorizationComment");

router.post("/", upload.single("imageUrl"), postCloudinary, postController.addPost);
router.get("/", postController.getPosts);
router.get("/:postId", postController.getPostsById);
router.put("/:postId", upload.single("imageUrl"), postCloudinary, postController.editPost);
router.delete("/:postId", postController.deletePost);
router.post("/:postId/comments", CommentController.addComment);
router.put("/:postId/comments/:commentId", authorizationComment, CommentController.editComment);
router.delete("/:postId/comments/:commentId", authorizationComment, CommentController.deleteComment);

module.exports = router;
