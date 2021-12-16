const { User, Comment } = require("../models");

async function authorizationComment(req, res, next) {
  try {
    const UserId = req.user.id;
    const PostId = req.params.postId;
    const commentId = req.params.commentId;

    const findComment = await Comment.findByPk(commentId);
    if (!findComment) {
      throw { name: "Not Found", message: "Comment not found" };
    }
    if (findComment.PostId !== PostId && findComment.UserId !== UserId) {
      throw { name: "Forbidden", message: "You don't have permission in this comment" };
    }
    next();
  } catch (err) {
    // console.log(err);
    next(err);
  }
}

module.exports = authorizationComment;
