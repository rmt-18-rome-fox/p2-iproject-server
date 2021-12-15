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
  static async editComment(req, res, next) {
    try {
      const UserId = req.user.id;
      const PostId = req.params.postId;
      const commentId = req.body.commentId;
      // const comment = req.body.comment;
      console.log(commentId);
      if (!PostId) {
        throw { name: "Not Found", message: "Post not found" };
      }
      // const updateComment = await Comment.update({
      //   comment,
      //   UserId,
      //   PostId,
      // });
      const comment = await Comment.findByPk(commentId);
      console.log(comment);
      // res.status(200).json(updateComment);
    } catch (err) {}
  }
}

module.exports = CommentController;
