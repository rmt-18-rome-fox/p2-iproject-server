const { User, Book } = require("../models");

class ControllerSeller {
  static async register(req, res, next) {
    try {
      const { name, email, password, CityId, cityName } = req.body;

      if (!name) throw { name: "emptyName" };
      if (!email) throw { name: "emptyEmail" };
      if (!password) throw { name: "emptyPassword" };
      if (!CityId) throw { name: "emptyCity" };
      if (!cityName) throw { name: "emptyCity" };
      const avatars = [
        "elyse",
        "kristy",
        "lena",
        "lindsay",
        "mark",
        "matthew",
        "molly",
        "patrick",
        "rachel",
      ];

      const randomNumber = Math.floor(Math.random() * avatars.length);
      const chosenAvatar = avatars[randomNumber];

      const avatar = `https://semantic-ui.com/images/avatar2/large/${chosenAvatar}.png`;

      const role = "seller";
      const data = {
        name,
        email,
        password,
        CityId,
        role,
        cityName,
        avatar,
      };

      const user = await User.create(data);

      res.status(201).json({ id: user.id, name: user.name, email: user.email });
    } catch (error) {
      next(error);
    }
  }

  static async book(req, res, next) {
    try {
      const { title, author, genre, publishedYear, price, imageUrl } = req.body;

      if (!title) throw { name: "emptyTitle" };
      if (!author) throw { name: "emptyAuthor" };
      if (!genre) throw { name: "emptyGenre" };
      if (!publishedYear) throw { name: "emptyPublishedYear" };
      if (!price) throw { name: "emptyPrice" };
      if (!imageUrl) throw { name: "emptyImageUrl" };

      const SellerId = +req.user.id;
      const data = {
        title,
        author,
        genre,
        publishedYear,
        price,
        imageUrl,
        SellerId,
      };

      const book = await Book.create(data);

      res.status(201).json(book);
    } catch (error) {
      next(error);
    }
  }

  static async sellerBooks(req, res, next) {
    try {
      const SellerId = +req.user.id;
      const books = await Book.findAll({
        where: {
          SellerId,
        },
      });

      console.log(books);
      res.status(200).json(books);
    } catch (error) {
      next(error);
    }
  }

  static async deleteBook(req, res, next) {
    try {
      const id = +req.params.id;

      const findBook = await Book.findByPk(id);
      if (!findBook) throw { name: "bookNotFound" };

      const destroyBook = findBook.destroy();

      const message = "Book has been deleted";

      res.status(200).json(message);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ControllerSeller;
