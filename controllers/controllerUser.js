const { User, Book } = require("../models");
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
        email: user.email,
      };
      const access_token = signToken(payload);

      const userData = {
        id: user.id,
        name: user.name,
        cityId: user.CityId,
        cityName: user.cityName,
      };

      res.status(200).json({ access_token, userData });
    } catch (error) {
      next(error);
    }
  }

  static async books(req, res, next) {
    try {
      const books = await Book.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      res.status(200).json(books);
    } catch (error) {
      next(error);
    }
  }

  static async bookDetail(req, res, next) {
    try {
      const bookId = +req.params.bookId;

      const book = await Book.findByPk(bookId, {
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        include: [{ model: User, attributes: ["name", "CityId", "cityName"] }],
      });
      if (!book) throw { name: "bookNotFound" };

      res.status(200).json(book);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ControllerUser;
