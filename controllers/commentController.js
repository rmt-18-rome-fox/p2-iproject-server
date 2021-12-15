const { Comment, Post, User } = require("../models");

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
      const commentId = req.params.commentId;
      const comment = req.body.comment;
      const updateParams = { comment, UserId, PostId };
      //   console.log(commentId);
      const findPost = await Post.findByPk(PostId);
      if (!findPost) {
        throw { name: "Not Found", message: "Post not found" };
      }
      const findComment = await Comment.findByPk(commentId);
      //   console.log(findComment);
      if (!findComment) {
        throw { name: "Not Found", message: "Comment not found" };
      }
      const updateComment = await Comment.update(updateParams, {
        where: {
          id: commentId,
        },
        returning: true,
      });

      res.status(200).json(updateComment);
    } catch (err) {
      console.log(err);
    }
  }
  static async deleteComment(req, res, next) {
    try {
      const PostId = req.params.postId;
      const commentId = req.params.commentId;

      const findPost = await Post.findByPk(PostId);
      if (!findPost) {
        throw { name: "Not Found", message: "Post not found" };
      }
      const findComment = await Comment.findByPk(commentId);
      //   console.log(findComment);
      if (!findComment) {
        throw { name: "Not Found", message: "Comment not found" };
      }
      await findComment.destroy();
      res.status(200).json({ message: `Comment id ${findComment.id} has been deleted` });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = CommentController;
