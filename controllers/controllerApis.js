require("dotenv").config();
const axios = require("axios");
const { response } = require("express");
const { where } = require("sequelize/dist");
const rajaOngkirEndpoint = `https://api.rajaongkir.com/starter`;
const rajaOngkirHeaders = {
  headers: {
    key: process.env.RAJA_ONGKIR_API,
  },
};
const xenditEndpoint = `https://api.xendit.co`;
const xenditAPI = process.env.XENDIT_SECRET_API;
const { Transaction, User, TopUp } = require("../models");

class ControllerApis {
  static async cities(req, res, next) {
    try {
      const url = `${rajaOngkirEndpoint}/city`;

      const response = await axios.get(url, rajaOngkirHeaders);
      const cities = response.data.rajaongkir.results;

      res.status(200).json(cities);
    } catch (err) {
      next(err);
    }
  }

  static async shipping(req, res, next) {
    try {
      const { origin, destination, weight, courier } = req.body;

      // Error Handling
      if (!origin) throw { name: `emptyOrigin` };
      else if (!destination) throw { name: `emptyDestination` };
      else if (!weight) throw { name: `emptyWeight` };
      else if (!courier) throw { name: `emptyCourier` };

      const url = `${rajaOngkirEndpoint}/cost`;
      const data = { origin, destination, weight, courier };

      const response = await axios.post(url, data, rajaOngkirHeaders);
      const shipping = response.data.rajaongkir;

      res.status(200).json({ shipping });
    } catch (err) {
      next(err);
    }
  }

  static async topUpEwallet(req, res, next) {
    try {
      const url = `${xenditEndpoint}/ewallets/charges`;
      // const phoneNumber = req.user.phoneNumber;
      const { amount, merchant } = req.body;

      if (!amount) throw { name: "emptyAmount" };

      const response = await axios({
        method: "POST",
        url,
        auth: {
          username: xenditAPI,
          password: "",
        },
        data: {
          reference_id: new Date(),
          currency: "IDR",
          amount: +amount,
          checkout_method: "ONE_TIME_PAYMENT",
          channel_code: merchant,
          channel_properties: {
            mobile_number: "+628998676094",
            success_redirect_url: "https://eight-book.web.app/wallet",
          },
          metadata: {
            branch_code: "tree_branch",
          },
        },
      });
      res.status(201).json(response.data);
    } catch (error) {
      next(error);
    }
  }

  static async xenditCallback(req, res, next) {
    try {
      const { data } = req.body;

      const transactionId = data.id;
      const topUp = await TopUp.findOne({
        where: { transactionId },
      });

      if (topUp) {
        const patchStatus = await topUp.update({
          status: data.status,
        });

        const user = await User.findByPk(topUp.UserId);
        const addBalance = await user.increment({ balance: topUp.amount });
        res.status(200).json(patchStatus);
      } else {
        res.status(200).json({ message: "Not Found" });
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ControllerApis;
