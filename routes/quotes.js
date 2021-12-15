const express = require('express');
const QuoteController = require('../controllers/quote');
const router = express.Router()

router.get('/', QuoteController.getQuote)

module.exports = router