const { User, CoffeePowder, OrderDetail } = require('../models');

const generataOrderId = async (req, res, next) => {
  try {
    const findOrderDetailPending = await OrderDetail.findAll({
      where: { orderStatus: 'pending' },
    });

    if (findOrderDetailPending.length == 1) {
      let order_cart_id = (Math.random() + 1).toString(36).substring(7);
      console.log(findOrderDetailPending);
      console.log(order_cart_id);
      req.order_cart_id = {
        order_cart_id: order_cart_id,
      };
    }

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = generataOrderId;
