const { Article } = require("../models/index");
const createArticle = async (req, res, next) => {
  try {
    const AdminId = req.user.id;
    const { content } = req.body;
    const imageUrl = req.additionalData;

    const newArticle = await Article.create({ content, AdminId, imageUrl });

    res.status(201).json(newArticle)
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = { createArticle };
