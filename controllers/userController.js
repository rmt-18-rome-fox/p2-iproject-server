const { User } = require("../models");
const { sign } = require("../helpers/jwt");
const { compare } = require("../helpers/bcryptjs");

class UserController {
  static async register(req, res, next) {
    try {
      const { name, email, password, phoneNumber, address } = req.body;
      const newUser = { name, email, password, phoneNumber, address };

      if (!email) {
        throw { name: "Bad Request", message: "Email is required" };
      }

      if (!password) {
        throw { name: "Bad Request", message: "Password is required" };
      }
      const user = await User.create(newUser);
      //   console.log(user);
      res.status(201).json({
        id: user.id,
        email: user.email,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email) {
        throw { name: "Bad Request", message: "Email is required" };
      }
      if (!password) {
        throw { name: "Bad Request", message: "Password is required" };
      }
      const findUser = await User.findOne({ where: { email } });
      if (!findUser) {
        throw { name: "Unauthorized", message: "Invalid email/password" };
      }
      const isValidPassword = await compare(password, findUser.password);
      if (!isValidPassword) {
        throw { name: "Unauthorized", message: "Invalid email/password" };
      }
      const payload = {
        id: findUser.id,
        email: findUser.email,
      };
      const access_token = sign(payload);
      res.status(200).json(access_token);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
