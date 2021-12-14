const { User, CoffeePowder, OrderDetail } = require('../models');
const { signToken, verifyToken } = require('../helpers/jwt');
const { hashPassword, comparePassword } = require('../helpers/bcrypt');
// import axios from 'axios';
const axios = require('axios');

const sandboxBaseUrl = 'https://app.sandbox.midtrans.com';
const apiSandboxBaseUrl = 'https://api.sandbox.midtrans.com';
const authString = Buffer.from(`SB-Mid-server-wfM0tqZERooC0zz0BuB3i90Z:`).toString('base64');

const postMidtrans = async (req, res, next) => {
  try {
    const UserId = req.user.id;
    const idOrderDetail = req.params.orderid;

    const findOrderDetail = await OrderDetail.findOne({
      where: { UserId: UserId, id: idOrderDetail },
      include: { model: CoffeePowder },
    });

    if (!findOrderDetail) {
      throw { name: 'notFound' };
    }

    // console.log(findOrderDetail.CoffeePowder.price);
    // console.log(findOrderDetail.quantity);

    const totalPrice = findOrderDetail.CoffeePowder.price * findOrderDetail.quantity;

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
          order_id: `COFFPOW-ORDER-${findOrderDetail.orderId}`,
          gross_amount: totalPrice,
        },
      },
    });

    // console.log(response.data);
    const result = response.data;

    res.status(200).json(result);
  } catch (err) {
    console.log(err.response);
    console.log('EROR ON MIDTRANS');
    // next(err);
  }
};

const checkStatusPayment = async (req, res, next) => {
  try {
    const order_Id = req.params.orderid;
    // console.log(order_Id);

    const findOrderDetail = await OrderDetail.findOne({
      where: { orderId: order_Id },
    });

    if (!findOrderDetail) {
      throw { name: 'notFound' };
    }

    const response = await axios({
      url: `${apiSandboxBaseUrl}/v2/COFFPOW-ORDER-${order_Id}/status`,
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

    res.status(200).json(tampungStatus);
  } catch (err) {
    console.log(err.response);
    next(err);
  }
};

module.exports = { postMidtrans, checkStatusPayment };
