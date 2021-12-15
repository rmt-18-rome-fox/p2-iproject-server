const { verifyToken } = require("../helpers/jwt");
const { Admin, User } = require("../models");

const userAuthentication = async (req, res, next) => {
  try {
    const { access_token: token } = req.headers;
    const payload = verifyToken(token);
    let userData;
    if (payload.role === "admin") {
      userData = await Admin.findByPk(payload.id);
    } else if (payload.role === "user") {
      userData = await User.findByPk(payload.id);
    }
    if (!userData) {
      throw { name: "JsonWebTokenError" };
    }

    req.user = {
      id: userData.id,
      email: userData.email,
      role: userData.role,
    };

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = userAuthentication;
