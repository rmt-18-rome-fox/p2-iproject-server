const { Booking, Movie } = require("../models");
const axios = require("axios");
require("dotenv").config();
const midtrans = process.env.MIDTRANS;

class PaymentController {
  static async midtrans(req, res, next) {
    try {
      const config = {
        method: "post",
        url: "https://app.sandbox.midtrans.com/snap/v1/transactions",
        headers: {
          Authorization: `Basic ${midtrans}`,
        },
        data: {
          transaction_details: {
            order_id: "YOUR-ORDERID-" + req.user.email + Date.now(),
            gross_amount: 50000,
          },
          credit_card: {
            secure: true,
          },
          customer_details: {
            first_name: "cintia",
            last_name: "customer",
            email: req.user.email,
            phone: "088888888",
          },
        },
      };
      axios(config)
        .then((resp) => {
          res.status(201).json(resp.data);
        })
        .catch((err) => {
          next(err);
        });
    } catch (err) {
      next(err);
    }
  }

  static async midtransSuccess(req, res, next) {
    try {
      const paid = await Booking.update(
        {
          isPaid: true,
        },
        {
          where: {
            UserId: req.user.id,
            MovieId: +req.params.id,
          },
        }
      );
      res.status(201).json({ message: paid });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = PaymentController;
