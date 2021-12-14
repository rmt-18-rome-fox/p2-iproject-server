const { User } = require("../models");

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
}

module.exports = UserController;
