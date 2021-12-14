const router = require('express').Router()

router.get('/', (req, res) => {
  res.send('My Individual Project')
})

module.exports = router