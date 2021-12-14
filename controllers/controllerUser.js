const { User } = require("../models");
const { decryptPassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");

class ControllerUser {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email) throw { name: "emptyEmail" };
      if (!password) throw { name: "emptyPassword" };

      const user = await User.findOne({ where: { email } });
      if (!user) throw { name: "loginFailed" };

      const isValidPassword = decryptPassword(password, user.password);
      if (!isValidPassword) throw { name: "loginFailed" };

      const payload = {
        id: user.id,
        name: user.name,
      };
      const access_token = signToken(payload);

      res.status(200).json({ access_token });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ControllerUser;
