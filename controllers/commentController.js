const { Comment } = require("../models");

class CommentController {
  static async addComment(req, res, next) {
    try {
      const UserId = req.user.id;
      const PostId = req.params.postId;
      const comment = req.body.comment;

      if (!PostId) {
        throw { name: "Not Found", message: "Post not found" };
      }
      const addComment = await Comment.create({
        comment,
        UserId,
        PostId,
      });
      res.status(201).json(addComment);
    } catch (err) {
      console.error(err);
      next(err);
    }
  }
}

module.exports = CommentController;
