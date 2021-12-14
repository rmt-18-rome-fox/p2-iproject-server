const { User, Cart, Book } = require("../models");
const { Op } = require("sequelize");

class ControllerCustomer {
  static async register(req, res, next) {
    try {
      const { name, email, password, CityId, cityName } = req.body;

      if (!name) throw { name: "emptyName" };
      if (!email) throw { name: "emptyEmail" };
      if (!password) throw { name: "emptyPassword" };
      if (!CityId) throw { name: "emptyCity" };
      if (!cityName) throw { name: "emptyCity" };

      const role = "customer";
      const data = { name, email, password, CityId, role, cityName };

      const user = await User.create(data);

      res.status(201).json({ id: user.id, name: user.name, email: user.email });
    } catch (error) {
      next(error);
    }
  }

  static async carts(req, res, next) {
    try {
      const CustomerId = +req.user.id;
      const carts = await Cart.findAll({
        where: {
          CustomerId,
        },
        include: "Book",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      res.status(200).json(carts);
    } catch (error) {
      next(error);
    }
  }

  static async postCart(req, res, next) {
    try {
      const BookId = +req.params.bookId;
      const CustomerId = +req.user.id;

      const book = await Book.findByPk(BookId);
      if (!book) throw { name: "bookNotFound" };

      const uniqueBookValidation = await Cart.findOne({
        where: {
          [Op.and]: [{ BookId }, { CustomerId }],
        },
      });
      if (uniqueBookValidation) throw { name: "uniqueBookValidation" };

      const data = { BookId, CustomerId };

      const addBook = await Cart.create(data);
      const message = `${book.title} has been added to cart`;
      res.status(201).json(message);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ControllerCustomer;
