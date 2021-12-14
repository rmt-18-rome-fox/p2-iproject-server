const { Product } = require("../models/index");

const authorization = async (req, res, next) => {
  const { id } = req.params;
  const user = req.user;
  try {
    const product = await Product.findByPk(id, { raw: true });
    if (user.role !== "admin" && user.id !== product.AuthorId) {
      throw { name: `unauthorized` };
    }
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = authorization;
