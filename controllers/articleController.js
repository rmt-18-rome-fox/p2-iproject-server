const { Article, Comment } = require("../models/index");
const axios = require("axios");

const createArticle = async (req, res, next) => {
  try {
    const AdminId = req.user.id;
    const { content, title, articleUrl, imageUrl } = req.body;
    // const imageUrl = req.additionalData;

    const newArticle = await Article.create({
      content,
      AdminId,
      imageUrl,
      articleUrl,
      title,
    });

    res.status(201).json(newArticle);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const getArticles = async (req, res, next) => {
  try {
    const articlesData = await Article.findAll({
      order: [["id", "DESC"]],
    });
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
        title,
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
      where: { id: articleId },
    });
    res.status(200).json({ message: `article ${findArticle.title} deleted` });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const addComment = async (req, res, next) => {
  try {
    const ArticleId = req.params.id;
    const userRole = req.user.role;
    const UserId = req.user.id;
    const { content } = req.body;

    if (userRole !== "user") {
      throw { name: "unauthorized" };
    }

    const findArticle = await Article.findByPk(ArticleId);
    if (!findArticle) {
      throw { name: "notFound" };
    }

    const newComment = await Comment.create({ content, ArticleId, UserId });
    res.status(201).json(newComment);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const deleteComment = async (req, res, next) => {
  try {
    const commentId = req.params.commentId;
    const ArticleId = req.params.id;

    const deletedComment = await Comment.findByPk(commentId);
    res.status(200).json({ message: `comment with id ${commentId} deleted` });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const getArticleDetail = async (req, res, next) => {
  try {
    const articleId = req.params.id;
    const response = await Article.findByPk(articleId);
    if (!response) {
      throw { name: "notFound" };
    }

    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};

const mediastackRoute = async (req, res, next) => {
  try {
    const keyword = req.body.payload;
    let response = [];
    if (keyword) {
      response = await axios.get(
        `http://api.mediastack.com/v1/news?access_key=082efd54ede2e28fbf9f1690cd147412&languages=en&keywords=${keyword}`
      );
    } else {
      response = await axios.get(
        "http://api.mediastack.com/v1/news?access_key=082efd54ede2e28fbf9f1690cd147412&languages=en"
      );
    }
    res.status(200).json(response.data);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const nytimesRoute = async (req, res, next) => {
  try {
    const response = await axios.get(
      "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=XIgkrjOQL13AOXeCYFykMwGPORZ6Vaal"
    );

    let result = response.data.results.map((el) => {
      let image = "";
      if (el.media.length === 0) {
        image = "-";
      } else {
        image = el.media[0]['media-metadata'][2].url;
      }

      return {
        title: el.title,
        description: el.abstract,
        image: image,
        url: el.url,
      };
    });

    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = {
  createArticle,
  getArticles,
  editArticle,
  addComment,
  deleteArticle,
  deleteComment,
  getArticleDetail,
  mediastackRoute,
  nytimesRoute,
};
