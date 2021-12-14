const router = require('express').Router();
const Controller = require('../controllers/user-controller');

router.post('/register', Controller.fansRegister);
router.post('/login', Controller.login);

module.exports = router