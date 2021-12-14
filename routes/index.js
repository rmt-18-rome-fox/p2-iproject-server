const router = require('express').Router()
const users = require('./userRoutes')

router.get('/', (req, res) => {
    res.send('Server newshub')
  })

router.use(users)

module.exports = router