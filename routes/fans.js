const router = require('express').Router();
const Controller = require('../controllers/user-controller');

router.post('/register', Controller.fansRegister);

module.exports = router