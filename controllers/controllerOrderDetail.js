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
    const quantity = 1;
    // const orderStatus = 'Test123';

    const findCoffee = await CoffeePowder.findByPk(CoffeeId);
    if (!findCoffee) {
      throw { name: 'notFound' };
    }

    const findOrderDetailPending = await OrderDetail.findAll({
      where: { orderStatus: 'pending' },
      raw: true,
    });
    // console.log(findOrderDetailPending);

    if (findOrderDetailPending.length == 0) {
      // req.order_cart_id = {
      //   order_cart_id: order_cart_id,
      // };

      const result = await OrderDetail.create({ UserId, CoffeeId, quantity, orderId: (Math.random() + 1).toString(36).substring(7), orderStatus: 'pending' });
      console.log('No Order Pending Before =============================================');
      res.status(201).json(result);
    } else if (findOrderDetailPending.length > 0) {
      console.log(findOrderDetailPending, '<<<<<<<<<<<<<<<< INI DATA');
      // =========================================== COUNTING NUMBER EXISTS ===========================================
      const allCoffeePowder = await CoffeePowder.findAll({
        raw: true,
      });
      const counts = {};
      findOrderDetailPending.map(function (el) {
        console.log(el.CoffeeId);
        allCoffeePowder.map((el2) => {
          if (el.CoffeeId == el2.id) {
            // counts[el2.id] = 0;
            if (!counts[el2.id]) {
              counts[el2.id] = 0;
            }
            counts[el2.id] += 1;
          }
        });
        // counts[el] = (counts[el] || 0) + 1;
      });
      console.log(counts, 'INI RESULTTTTTTTTTTTTTTTTT');
      console.log(counts[2]);
      if (!counts[CoffeeId]) {
        const result = await OrderDetail.create({ UserId, CoffeeId, quantity, orderStatus: 'pending' });
        console.log('DI CART GAADA ID COFFEE INI ' + CoffeeId + ' =============================================');
        res.status(201).json(result);
      } else if (counts[CoffeeId]) {
        let tampungQuantity = await OrderDetail.findAll({
          where: { orderStatus: 'pending', CoffeeId },
          raw: true,
        });
        console.log(tampungQuantity[0].quantity, 'INI TAMPUNG QUANTITY <<<<<<<<<<<<<<<<');
        tampungQuantity[0].quantity += 1;
        const result = await OrderDetail.update({ quantity: tampungQuantity[0].quantity }, { where: { CoffeeId, orderStatus: 'pending' } });
        console.log('DI CART UDAH ID COFFEE INI ' + CoffeeId + ' =============================================');
        res.status(201).json({ message: 'Berhasil patch quantity' });
      }
      // =========================================== COUNTING NUMBER EXISTS ===========================================

      // const result = await OrderDetail.create({ UserId, CoffeeId, quantity, orderStatus: 'pending' });
      // console.log('There is Order Pending Before This =============================================');
      // res.status(200).json(result);
    }

    // const result = await OrderDetail.create({ UserId, CoffeeId, quantity, orderId: (Math.random() + 1).toString(36).substring(7), orderStatus: 'pending' });
    // res.status(200).json(result);
    // res.status(200).json({ msg: 'OK ORDERDETAIL KEBUAT' });
  } catch (err) {
    next(err);
  }
};

const getOrderDetailVer2 = async (req, res, next) => {
  try {
    const UserId = req.user.id;
    const result = await OrderDetail.findAll({
      where: { UserId: UserId, orderStatus: 'pending' },
      order: [['id', 'ASC']],
      include: { model: CoffeePowder },
    });

    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const patchOrderDetailPlus = async (req, res, next) => {
  try {
    const orderDetailId = req.params.orderid;

    let tampungQuantity = await OrderDetail.findAll({
      where: { orderStatus: 'pending', id: orderDetailId },
      raw: true,
    });
    console.log(tampungQuantity[0].quantity, 'INI TAMPUNG QUANTITY <<<<<<<<<<<<<<<<');
    tampungQuantity[0].quantity += 1;
    console.log(tampungQuantity[0].quantity, 'UPDATED');
    const result = await OrderDetail.update({ quantity: tampungQuantity[0].quantity }, { where: { id: orderDetailId, orderStatus: 'pending' } });
    res.status(200).json({ message: 'Success Patch ++ Quantity' });
  } catch (err) {
    next(err);
  }
};

const patchOrderDetailMinus = async (req, res, next) => {
  try {
    const orderDetailId = req.params.orderid;

    let tampungQuantity = await OrderDetail.findAll({
      where: { orderStatus: 'pending', id: orderDetailId },
      raw: true,
    });
    console.log(tampungQuantity[0].quantity, 'INI TAMPUNG QUANTITY <<<<<<<<<<<<<<<<');
    tampungQuantity[0].quantity -= 1;
    if (tampungQuantity[0].quantity < 0) {
      tampungQuantity[0].quantity = 0;
    }
    console.log(tampungQuantity[0].quantity, 'UPDATED');
    const result = await OrderDetail.update({ quantity: tampungQuantity[0].quantity }, { where: { id: orderDetailId, orderStatus: 'pending' } });
    res.status(200).json({ message: 'Success Patch -- Quantity' });
  } catch (err) {
    next(err);
  }
};

const deleteOrderDetail = async (req, res, next) => {
  try {
    const orderDetailId = req.params.orderid;

    const result = await OrderDetail.destroy({ where: { id: orderDetailId } });

    // let tampungQuantity = await OrderDetail.findAll({
    //   where: { orderStatus: 'pending', id: orderDetailId },
    //   raw: true,
    // });
    // console.log(tampungQuantity[0].quantity, 'INI TAMPUNG QUANTITY <<<<<<<<<<<<<<<<');
    // tampungQuantity[0].quantity -= 1;
    // if (tampungQuantity[0].quantity < 0) {
    //   tampungQuantity[0].quantity = 0;
    // }
    // console.log(tampungQuantity[0].quantity, 'UPDATED');
    // const result = await OrderDetail.update({ quantity: tampungQuantity[0].quantity }, { where: { id: orderDetailId, orderStatus: 'pending' } });
    res.status(200).json({ message: 'Success Delete OrderDetail' });
  } catch (err) {
    next(err);
  }
};

module.exports = { getOrderDetail, postOrderDetail, getOrderDetailVer2, patchOrderDetailPlus, patchOrderDetailMinus, deleteOrderDetail };
