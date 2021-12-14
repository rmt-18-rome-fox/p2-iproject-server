const { User, CoffeePowder, OrderDetail } = require('../models');

const getOrderDetail = async (req, res, next) => {
  try {
    const UserId = req.user.id;
    const result = await User.findAll({
      where: { id: UserId },
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'password', 'phoneNumber', 'address', 'lastName', 'firstName'],
      },
      include: {
        model: CoffeePowder,
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
      },
    });

    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const postOrderDetail = async (req, res, next) => {
  try {
    const UserId = req.user.id;
    const CoffeeId = req.params.coffeeid;
    const { quantity } = req.body;
    // const orderStatus = 'Test123';

    const findCoffee = await CoffeePowder.findByPk(CoffeeId);
    if (!findCoffee) {
      throw { name: 'notFound' };
    }

    const result = await OrderDetail.create({ UserId, CoffeeId, quantity, orderId: (Math.random() + 1).toString(36).substring(7), orderStatus: 'pending' });
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = { getOrderDetail, postOrderDetail };
