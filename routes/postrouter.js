const router = require("express").Router();
const postController = require("../controllers/postController");
const upload = require("../middlewares/multer");
const postCloudinary = require("../middlewares/cloudinary");

router.post("/", upload.single("imageUrl"), postCloudinary, postController.addPost);
router.get("/", postController.getPosts);
router.get("/:postId", postController.getPostsById);
router.put("/:postId", upload.single("imageUrl"), postCloudinary, postController.editPost);

module.exports = router;
