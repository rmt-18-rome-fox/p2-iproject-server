const router = require('express').Router()
const user = require('./UserRouter')
const post = require('./PostRouter')

router.use('/', user)
router.use('/posts', post)

module.exports = router