const user = require('express').Router()
// MIDDLEWARE
const authentication = require('../middleware/authentication')
const { instanceMulter } = require('../middleware/multer')
const { fileUpload } = require('../middleware/fileUpload')
// CONTROLLER
const UserController = require('../controller/UserController')

user.post('/register', UserController.register)
user.post('/login', UserController.login)
user.post('/profiles', 
  authentication, 
  instanceMulter.single('profileImg'),
  fileUpload,
  UserController.postProfile
)

module.exports = user