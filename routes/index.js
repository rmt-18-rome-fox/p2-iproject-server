const express = require('express');
const route = express.Router();
const controllerCust = require('../controllers/controllerCust');
const controllerCoffee = require('../controllers/controllerCoffee');
const controllerAdmin = require('../controllers/controllerAdmin');
const controllerOrderDetail = require('../controllers/controllerOrderDetail');
const errorHandlers = require('../middleware/errorHandlers');
const { authentication, authorizationAdminOnly } = require('../middleware/auth');

route.post('/register', controllerCust.postRegister);
route.post('/login', controllerCust.postLogin);

route.get('/coffeepowder', authentication, controllerCoffee.getCoffeePowder);

route.get('/orderdetail', authentication, controllerOrderDetail.getOrderDetail);
route.post('/orderdetail/:coffeeid', authentication, controllerOrderDetail.postOrderDetail);

route.post('/admin/coffeepowder', [authentication, authorizationAdminOnly], controllerAdmin.postCoffeePowder);
route.delete('/admin/coffeepowder/:id', [authentication, authorizationAdminOnly], controllerAdmin.deleteCoffeePowder);
route.put('/admin/coffeepowder/:id', [authentication, authorizationAdminOnly], controllerAdmin.updateCoffeePowder);
route.get('/admin/coffeepowder/:id', [authentication], controllerCoffee.getOneCoffeePowder);

route.use(errorHandlers);

module.exports = route;
