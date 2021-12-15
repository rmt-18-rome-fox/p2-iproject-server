const { Character } = require("../models");

const authorize = async (req, res, next) => {
  try {
    const charId = req.params.id;
    const { id } = req.user;

    const findChar = await Character.findByPk(charId);
    if (!findChar) throw { name: "notFound" };

    if (findChar.UserId !== id) throw { name: "unauthorized" };

    req.character = {
      ...findChar,
    };

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = authorize;
