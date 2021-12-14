const route = require('express').Router();
const errorHandler = require('../middleware/errorHandler')
const UserController = require('../controllers/usercontroller');

//for user
route.post('/register',UserController.register)
route.post('/login', UserController.login)

route.use(errorHandler)
module.exports = route