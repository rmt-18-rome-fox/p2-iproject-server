const router = require('express').Router()
const user = require('./UserRouter')

router.get('/', (req, res) => {
  res.status(200).json('Server Working')
})

// USER CONTROLLER
router.use('/', user)

module.exports = router