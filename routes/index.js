const express = require('express');
const route = express.Router();
const controllerCust = require('../controllers/controllerCust');
const controllerCoffee = require('../controllers/controllerCoffee');
const controllerAdmin = require('../controllers/controllerAdmin');
const controllerMidtrans = require('../controllers/controllerMidtrans');
const controllerOrderDetail = require('../controllers/controllerOrderDetail');
const errorHandlers = require('../middleware/errorHandlers');
const generateOrderId = require('../middleware/generateOrder_id');
const { authentication, authorizationAdminOnly } = require('../middleware/auth');

route.post('/register', controllerCust.postRegister);
route.post('/login', controllerCust.postLogin);

route.get('/coffeepowder', authentication, controllerCoffee.getCoffeePowder);

route.get('/orderdetail', authentication, controllerOrderDetail.getOrderDetailVer2);

route.post('/orderdetail/:coffeeid', authentication, controllerOrderDetail.postOrderDetail);
route.delete('/orderdetail/:orderid', authentication, controllerOrderDetail.deleteOrderDetail);
route.patch('/orderdetailplus/:orderid', authentication, controllerOrderDetail.patchOrderDetailPlus);
route.patch('/orderdetailminus/:orderid', authentication, controllerOrderDetail.patchOrderDetailMinus);

route.post('/admin/coffeepowder', [authentication, authorizationAdminOnly], controllerAdmin.postCoffeePowder);
route.delete('/admin/coffeepowder/:id', [authentication, authorizationAdminOnly], controllerAdmin.deleteCoffeePowder);
route.put('/admin/coffeepowder/:id', [authentication, authorizationAdminOnly], controllerAdmin.updateCoffeePowder);
route.patch('/admin/coffeepowder/:id', [authentication, authorizationAdminOnly], controllerAdmin.patchIsDeleteCoffeePowder);
route.get('/admin/coffeepowder/:id', [authentication], controllerCoffee.getOneCoffeePowder);

route.post('/paycharge', [authentication], controllerMidtrans.postMidtrans);
route.get('/checkstatuspayment', authentication, controllerMidtrans.checkStatusPayment);

route.use(errorHandlers);

module.exports = route;
