const { Booking, Movie } = require("../models");
const axios = require("axios");
require("dotenv").config();
const midtrans = process.env.MIDTRANS;

class PaymentController {
  static async midtrans(req, res, next) {
    try {
      const booking=await Booking.findOne({
        where:{
          UserId:req.user.id,
          MovieId:req.body.MovieId
        }
      })
      const config = {
        method: "post",
        url: "https://app.sandbox.midtrans.com/snap/v1/transactions",
        headers: {
          Authorization: `Basic ${midtrans}`,
        },
        data: {
          transaction_details: {
            order_id: `${booking.UserId}-${booking.MovieId}`,//"YOUR-ORDERID-" + req.user.email + Date.now(),
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
      const orderId=req.query.order_id
      let UserId=orderId.split('-')[0]
      let MovieId=orderId.split('-')[1]
      const paid = await Booking.update(
        {
          isPaid: true,
        },
        {
          where: {
            UserId: +UserId,
            MovieId: +MovieId,
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
