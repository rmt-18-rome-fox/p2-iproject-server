const payment = require('express').Router()
const { paymentAuthor, getPaymentDetails } = require('../middleware/authorization')
const PaymentStatusController = require('../controller/PaymentStatusController')

payment.post('/post', 
  paymentAuthor,
  PaymentStatusController.assignUser
)

payment.get('/:UserId',
  getPaymentDetails,
  PaymentStatusController.getPaymentByUserId
)

payment.post('/stripe-checkout-session', 
  PaymentStatusController.paymentProcess
)

payment.patch('/success', PaymentStatusController.successPayment)

module.exports = payment