const { PaymentStatus, User, Organization } = require('../models')
const stripe = require('../apis/stripe')

class PaymentStatusController {
  static async assignUser (req, res, next) {
    const { email, OrganizationId } = req.body
    try {
      const findUser = await User.findOne({
        where: {
          email
        }
      })
      if ( !findUser) throw { name: "USER_NOT_FOUND" }

      const findOrgs = await Organization.findOne({
        where: {
          id: OrganizationId
        }
      })
      if ( !findOrgs ) throw { name: "ORGANIZATION_FAIL" }

      const data = await PaymentStatus.create({
        UserId: findUser.id,
        OrganizationId
      })

      res.status(201).json({
        message: `${email} already assign to ${findOrgs.name}`,
        data
      })
    } catch (error) {
      next(error)
    }
  }
  
  static async getPaymentByUserId (req, res, next) {
    const { UserId } = req.params
    try {
      const data = await PaymentStatus.findOne({
        include: [{
          model: User,
          attributes: {
            exclude: ["updatedAt", "createdAt", "password"]
          }
        }, {
          model: Organization,
          attributes: {
            exclude: ["updatedAt", "createdAt"]
          }
        }],
        where: {
          UserId
        },
        attributes: {
          exclude: ["updatedAt", "createdAt"]
        }
      })
      if ( !data ) throw { name: "NOT_FOUND" }

      res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }

  static async paymentProcess (req, res, next) {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        line_items: req.body.stripe,
        success_url: `${process.env.CLIENT_URL}`,
        cancel_url: `${process.env.CLIENT_URL}/about`
      })
      
      /**
       * Arahin ke vue components yg isinya cuman script untuk update 
       * success payment, terus arahin ke halaman home dengan success message
       */
      console.log(req.body.idPayment);

      res.json({
        url: session.url
      })
    } catch (error) {
      next(error)
    }
  }

  static async successPayment (req, res, next) {
    try {
      const data = await PaymentStatus.update({
        status: 'paid'
      }, {
        where: {
          id
        }
      })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = PaymentStatusController