const { Article, Comment } = require("../models/index");

const createArticle = async (req, res, next) => {
  try {
    const AdminId = req.user.id;
    const { content, title } = req.body;
    const imageUrl = req.additionalData;

    const newArticle = await Article.create({ content, AdminId, imageUrl, title });

    res.status(201).json(newArticle);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const getArticles = async (req, res, next) => {
  try {
    const articlesData = await Article.findAll();
    res.status(200).json(articlesData);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const editArticle = async (req, res, next) => {
  try {
    const articleId = req.params.id;
    const imageUrl = req.additionalData;
    const { content, title } = req.body;

    const findArticle = await Article.findByPk(articleId);
    if (!findArticle) {
      throw { name: "notFound" };
    }

    const updatedArticle = await Article.update(
      {
        content,
        imageUrl,
        title
      },
      {
        where: { id: articleId },
        returning: true,
      }
    );

    res.status(200).json(updatedArticle[1][0]);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const deleteArticle = async (req, res, next) => {
  try {
    const articleId = req.params.id;

    const findArticle = await Article.findByPk(articleId);
    if (!findArticle) {
      throw { name: "notFound" };
    }

    const deletedArticle = await Article.destroy({
        where: {id: articleId}
    })
    res.status(200).json({message: `article ${findArticle.title} deleted`})
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const addComment = async (req, res, next) => {
  try {
      const ArticleId = req.params.id
      const userRole = req.user.role
      const UserId = req.user.id
      const {content} = req.body

      if (userRole !== "user") {
        throw {name: "unauthorized"}
      }

      const findArticle = await Article.findByPk(ArticleId)
      if (!findArticle) {
        throw { name: "notFound" };
      }

      const newComment = await Comment.create({content, ArticleId, UserId })
      res.status(201).json(newComment)
      
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const deleteComment = async (req, res, next) => {
    try {
        const commentId = req.params.commentId;
        const ArticleId = req.params.id;

        const deletedComment = await Comment.findByPk(commentId)
        res.status(200).json({message: `comment with id ${commentId} deleted`})
        
    } catch (err) {
        console.log(err);
        next(err)
    }
}

module.exports = {
  createArticle,
  getArticles,
  editArticle,
  addComment,
  deleteArticle,
  deleteComment
};
