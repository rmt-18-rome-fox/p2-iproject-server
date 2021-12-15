const router = require('express').Router()
const user = require('./UserRouter')
const posts = require('./PostRouter')
const authentication = require('../middleware/authentication')
const organizaiton = require('./OrganizationRouter')

router.use('/', user)

router.use(authentication)
router.use('/posts', posts)
router.use('/organization', organization)

module.exports = router