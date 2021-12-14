const router = require('express').Router()
const user = require('./UserRouter')

router.use('/', user)

module.exports = router