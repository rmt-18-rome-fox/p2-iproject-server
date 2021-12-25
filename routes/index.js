const router = require('express').Router()
const users = require('./userRoutes')
const article = require('./articleRoutes')

router.get('/', (req, res) => {
    res.send('Server newshub')
  })

router.use(users)
router.use(article)

module.exports = router