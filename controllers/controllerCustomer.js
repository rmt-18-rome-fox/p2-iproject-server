const { User, Cart, Book, Transaction } = require("../models");
const { Op } = require("sequelize");
const { decryptPassword } = require("../helpers/bcrypt");

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

  static async deleteCart(req, res, next) {
    try {
      const id = +req.params.id;
      const cart = await Cart.findOne({ where: { id }, include: "Book" });
      if (!cart) throw { name: "cartNotFound" };

      const message = `${cart.Book.title} has been deleted from cart`;
      const deleteCart = await cart.destroy();
      res.status(200).json(message);
    } catch (error) {
      next(error);
    }
  }

  static async transactions(req, res, next) {
    try {
      const UserId = +req.user.id;
      const transactions = await Transaction.findAll({
        where: { UserId },
        include: "Book",
      });

      res.status(200).json(transactions);
    } catch (error) {
      next(error);
    }
  }

  static async postTransaction(req, res, next) {
    try {
      const BookId = +req.query.bookId;
      const UserId = +req.user.id;
      const status = "Pending";
      const { amount, transactionId } = req.body;

      const transaction = await Transaction.create({
        BookId,
        UserId,
        status,
        amount,
        transactionId,
      });
      res.status(201).json(transaction);
    } catch (error) {
      next(error);
    }
  }

  static async deleteCartByQuery(req, res, next) {
    try {
      const CustomerId = +req.user.id;
      const BookId = +req.query.bookId;

      const user = await User.findByPk(CustomerId);
      if (!user) throw { name: "userNotFound" };

      const book = await Book.findByPk(BookId);
      if (!book) throw { name: "bookNotFound" };

      const cart = await Cart.findOne({
        where: {
          [Op.and]: { BookId, CustomerId },
        },
      });

      let message = "";
      if (cart) {
        const destroyCart = await cart.destroy();
        message = "Cart has deleted";
        res.status(200).json(message);
      } else {
        message = "Book is not in the cart";
        res.status(200).json(message);
      }
    } catch (error) {
      next(error);
    }
  }

  static async paymentAuth(req, res, next) {
    try {
      const userId = +req.user.id;
      const user = await User.findByPk(userId);

      const { password } = req.body;
      if (!password) throw { name: "wrongPassword" };

      const isValidPassword = decryptPassword(password, user.password);
      if (!isValidPassword) throw { name: "loginFailed" };

      res.status(200).json({ message: `Verified` });
    } catch (error) {
      next(error);  
    }
  }
}

module.exports = ControllerCustomer;
