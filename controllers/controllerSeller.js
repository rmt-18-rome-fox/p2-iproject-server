const { User, Book } = require("../models");

class ControllerSeller {
  static async register(req, res, next) {
    try {
      const { name, email, password, CityId } = req.body;

      if (!name) throw { name: "emptyName" };
      if (!email) throw { name: "emptyEmail" };
      if (!password) throw { name: "emptyPassword" };
      if (!CityId) throw { name: "emptyCity" };

      const role = "seller";
      const data = { name, email, password, CityId, role };

      const user = await User.create(data);

      res.status(201).json({ id: user.id, name: user.name, email: user.email });
    } catch (error) {
      next(error);
    }
  }

  static async book(req, res, next) {
    try {
      console.log("masokk");
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
}

module.exports = ControllerSeller;
