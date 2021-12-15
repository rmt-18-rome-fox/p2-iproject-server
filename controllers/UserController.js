const { compare } = require("../helpers/bcrypt");
const { sign } = require("../helpers/jwt");
const { User } = require("../models");

class UserController {
  static async register(req, res, next) {
    try {
      const { email, password } = req.body;
      const createUser = await User.create({ email, password });
      res.status(201).json({ id: createUser.id, email: createUser.email });
    } catch (err) {
      console.log(err);
    }
  }
  static async login(req, res, next) {
    try {
      const { email, password } = body;
      if (!email) throw { name: "noInput" };
      if (!password) throw { name: "noInput" };

      const findUser = await User.findOne({ where: { email } });
      if (!findUser || compare(password, findUser.password)) throw { name: "invalid" };

      const payload = sign({ id: findUser.id, email: findUser.email });

      res.status(200).json(payload);
    } catch (err) {
      next(err);
    }
  }
}
module.exports = UserController;
