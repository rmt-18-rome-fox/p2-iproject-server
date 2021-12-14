const { verify } = require("../helpers/jwt");
const { User } = require("../models");

const authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers;

    const verifyToken = verify(access_token);
    if (!verifyToken) {
      throw { name: "Unauthorized", message: "Invalid access token" };
    }
    const findUser = await User.findOne({
      where: {
        email: verifyToken.email,
      },
    });
    if (!findUser) {
      throw { name: "Not Found", message: "User not found" };
    }
    req.user = verifyToken;
    next();
  } catch (err) {
    next(err);
  }
};
