const express = require('express');
const route = express.Router();
const controllerCust = require('../controllers/controllerCust');
const controllerCoffee = require('../controllers/controllerCoffee');
const errorHandlers = require('../middleware/errorHandlers');
const { authentication, authorization } = require('../middleware/auth');

route.post('/register', controllerCust.postRegister);
route.post('/login', controllerCust.postLogin);

route.get('/coffeepowder', authentication, controllerCoffee.getCoffeePowder);

route.use(errorHandlers);

module.exports = route;
