const route = require('express').Router();
const errorHandler = require('../middleware/errorHandler')
const UserController = require('../controllers/usercontroller');
const GameController = require('../controllers/gamecontroller')
const  {Authentikasi} = require('../middleware/auth')

//for user
route.post('/register',UserController.register)
route.post('/login', UserController.login)

route.use(Authentikasi)
//forgame
route.post('/games',GameController.addGame)
route.get('/games', GameController.showGame)
route.get('/games/:id', GameController.showOneGame)

route.use(errorHandler)
module.exports = route