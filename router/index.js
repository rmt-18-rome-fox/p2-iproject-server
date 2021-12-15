const router = require('express').Router()
const user = require('./UserRouter')
const posts = require('./PostRouter')
const authentication = require('../middleware/authentication')

router.use('/', user)

router.use(authentication)
router.use('/posts', posts)

module.exports = router