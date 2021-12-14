const { Comment, Article } = require("../models/index");

const adminAuthorization = (req, res, next) => {
  try {
    const userRole = req.user.role;

    if (userRole !== "admin") {
      throw { name: "unauthorized" };
    }
    next();
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const commentAuthorization = async (req, res, next) => {
  try {
    const userRole = req.user.role;
    const UserId = req.user.id;
    const ArticleId = req.params.id;
    const commentId = req.params.commentId;

    const findArticle = await Article.findByPk(ArticleId);
    if (!findArticle) {
      throw { name: "notFound" };
    }

    const findComment = await Comment.findByPk(commentId);
    if (!findComment) {
      throw { name: "noComment" };
    }

    if (userRole !== "admin") {
      if (UserId !== findComment.UserId) {
        throw { name: "unauthorized" };
      }
    }
    next();
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = { adminAuthorization, commentAuthorization };
