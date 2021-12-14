const router = require('express').Router()

router.get('/', (req, res) => {
  res.status(200).json('Server Working')
})

module.exports = router