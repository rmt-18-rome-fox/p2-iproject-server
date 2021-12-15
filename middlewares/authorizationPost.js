const { User, Post } = require("../models");

async function authorizationPost(req, res, next) {
  try {
    const UserId = req.user.id;
    const PostId = req.params.postId;

    const findPost = await Post.findByPk(PostId);
    if (!findPost) {
      throw { name: "Not Found", message: "Post not found" };
    }
    if (findPost.UserId !== UserId) {
      throw { name: "Forbidden", message: "You don't have permission in this post" };
    }
    next();
  } catch (err) {
    console.log(err);
    next(err);
  }
}

module.exports = authorizationPost;
