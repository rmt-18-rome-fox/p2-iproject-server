const xenditInstance = require('../helper/xendit')
const invoiceSpecificOptions = {};
const {  Invoice } = xenditInstance
const inv = new Invoice(invoiceSpecificOptions);
const axios = require('axios')

module.exports = class Controller {

  static async createInvoice(req, res, next) {
    console.log("masuk payment");
    const {email} = req.user
    const uuid = await axios.get('https://www.uuidgenerator.net/api/version1')
    const externalID = uuid.data
    const input = { 
      amount: 200000,
      payerEmail: email,
      externalID,
      description: "Subscription to Premium" 
    }
    try {
      const newInvoice = await inv.createInvoice(input)
      const {
        external_id: externalID,
        amount,
        status,
        payer_email: payerEmail,
        description,
        expiry_date: expiryDate,
        invoice_url: invoiceUrl
      } = newInvoice
      console.log(newInvoice,"....");

      // const dbInvoice = await InvoiceModel.create(invoiceInput)
      res.status(200).json({invoiceUrl})
    } catch (error) {
      console.log(error,"....");
      next(error)
    }
  }

  static async invoiceCallback(req, res, next) {
    const { status, payment_channel: paymentMethod, external_id: externalID } = req.body
    const input = { status, paymentMethod }

    try {
      const selectedInvoice = await InvoiceModel.findOne({ where: { externalID } })
      const invoiceId = selectedInvoice.dataValues.id
      const updatePayment = await PaymentDetail.update({ status }, { where: { InvoiceId: invoiceId }, returning: true })
      const appointmentId = updatePayment[1][0].appointmentId
      if (status === 'EXPIRED') {
        const updatedAppointment = await Appointment.update({ status }, { Where: { id: appointmentId } })
      }
      const updatedInvoice = await InvoiceModel.update(input, { where: { externalID }, returning: true })
      res.status(200).json({ message: 'Success' })
    } catch (error) {
      next(error)
    }
  }
}