const { User, CoffeePowder, OrderDetail } = require('../models');
const { signToken, verifyToken } = require('../helpers/jwt');
const { hashPassword, comparePassword } = require('../helpers/bcrypt');
const { Op } = require('sequelize');
// import axios from 'axios';
const axios = require('axios');

const sandboxBaseUrl = 'https://app.sandbox.midtrans.com';
const apiSandboxBaseUrl = 'https://api.sandbox.midtrans.com';
const authString = Buffer.from(`SB-Mid-server-wfM0tqZERooC0zz0BuB3i90Z:`).toString('base64');

const postMidtrans = async (req, res, next) => {
  try {
    const UserId = req.user.id;
    const idOrderDetail = req.params.orderid;
    // console.log(UserId);

    const findOrderDetail = await OrderDetail.findAll({
      where: { UserId: UserId, orderStatus: 'pending' },
      include: { model: CoffeePowder },
    });
    if (!findOrderDetail) {
      throw { name: 'notFound' };
    }

    const findOneOrderDetail = await OrderDetail.findOne({
      where: {
        UserId: UserId,
        orderStatus: 'pending',
        orderId: {
          [Op.ne]: null,
        },
      },
      include: { model: CoffeePowder },
    });

    // console.log(findOneOrderDetail.orderId, '<<<<<<<<<<<<<<, INI FIND ONE');

    // =================== HITUNG TOTAL PRICE CART ===================
    let totalPrice = 0;

    const tampung = findOrderDetail.forEach((el) => {
      // console.log(el.CoffeePowder.price * el.quantity);
      totalPrice += el.CoffeePowder.price * el.quantity;
    });

    // GENERATE ORDER_ID
    let cartOrderId = 'COFFPOW-ORDER-' + findOneOrderDetail.orderId;

    console.log(totalPrice, cartOrderId, '<<<<<<<<<<<<<<<<< INI TOTAL PRICE X ORDER_ID');

    // console.log(findOrderDetail.CoffeePowder.price);
    // console.log(findOrderDetail.quantity);

    // const totalPrice = findOrderDetail.CoffeePowder.price * findOrderDetail.quantity;

    const response = await axios({
      url: `${sandboxBaseUrl}/snap/v1/transactions`,
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Basic ${authString}`,
      },
      data: {
        transaction_details: {
          order_id: `${cartOrderId}`,
          gross_amount: totalPrice,
        },
      },
    });

    // console.log(response.data);
    const result = response.data;

    const responseStatus2 = await axios({
      url: `${apiSandboxBaseUrl}/v2/${cartOrderId}/status`,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Basic ${authString}`,
      },
    });

    let tampungStatus2 = {
      transaction_status: responseStatus2.data.transaction_status,
      fraud_status: responseStatus2.data.fraud_status,
      status_message: responseStatus2.data.status_message,
    };
    // console.log(tampungStatus);

    console.log(tampungStatus2.data);
    // console.log(tampungStatus);

    // res.status(200).json(tampungStatus);

    res.status(200).json({ result });
  } catch (err) {
    console.log(err.response.data);
    console.log('EROR ON MIDTRANS');
    // next(err);
  }
};

const checkStatusPayment = async (req, res, next) => {
  try {
    // const order_Id = req.params.orderid;
    const UserId = req.user.id;
    // console.log(order_Id);

    // const findOrderDetail = await OrderDetail.findOne({
    //   where: { orderId: order_Id },
    // });

    // if (!findOrderDetail) {
    //   throw { name: 'notFound' };
    // }
    const findOneOrderDetail = await OrderDetail.findOne({
      where: { UserId: UserId, orderStatus: 'pending' },
      include: { model: CoffeePowder },
      raw: true,
    });

    if (!findOneOrderDetail) {
      throw { name: 'notFound' };
    }

    let cartOrderId = 'COFFPOW-ORDER-' + findOneOrderDetail.orderId;

    console.log(findOneOrderDetail, '<<<<<<<<<<<<<< INI FIND ONE ORDER DETAIL');
    console.log(cartOrderId, '<<<<<<<<<<<<<<<<< INI ORDER ID');

    const response = await axios({
      url: `${apiSandboxBaseUrl}/v2/${cartOrderId}/status`,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Basic ${authString}`,
      },
    });

    let tampungStatus = {
      transaction_status: response.data.transaction_status,
      fraud_status: response.data.fraud_status,
      status_message: response.data.status_message,
    };
    // console.log(tampungStatus);

    console.log(response.data);

    if (tampungStatus.transaction_status == 'capture') {
      await OrderDetail.update({ orderStatus: 'complete' }, { where: { orderStatus: 'pending', UserId } });
    }

    res.status(200).json(tampungStatus);
  } catch (err) {
    console.log(err.response.data);
    next(err);
  }
};

module.exports = { postMidtrans, checkStatusPayment };
