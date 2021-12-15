const stripe = require('stripe')(process.env.STRIPE_API_SECRET_KEY)

module.exports = stripe
