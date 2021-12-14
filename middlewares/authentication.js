const { User } = require("../models");
const { decryptToken } = require("../helpers/jwt");
const { Op } = require("sequelize");

const authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers;
    if (!access_token) throw { name: "unathorized" };

    const userData = decryptToken(access_token);
    if (!userData) throw { name: "unatorized" };

    const user = await User.findOne({
      where: {
        [Op.and]: [{ id: userData.id }, { email: userData.email }],
      },
    });
    if (!user) throw { name: "unatorized" };

    req.user = {
      id: user.id,
      CityId: user.CityId,
    };

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { authentication };
