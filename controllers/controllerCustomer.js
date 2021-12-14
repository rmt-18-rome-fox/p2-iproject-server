const { User, Cart } = require("../models");

class ControllerCustomer {
  static async register(req, res, next) {
    try {
      const { name, email, password, CityId } = req.body;

      if (!name) throw { name: "emptyName" };
      if (!email) throw { name: "emptyEmail" };
      if (!password) throw { name: "emptyPassword" };
      if (!CityId) throw { name: "emptyCity" };

      const role = "customer";
      const data = { name, email, password, CityId, role };

      const user = await User.create(data);

      res.status(201).json({ id: user.id, name: user.name, email: user.email });
    } catch (error) {
      next(error);
    }
  }

  static async carts(req, res, next) {
    try {
      const carts = await Cart.findAll({
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
}

module.exports = ControllerCustomer;
