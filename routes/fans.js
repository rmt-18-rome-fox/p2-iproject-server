const router = require('express').Router();
const Controller = require('../controllers/user-controller');
const { authentication } = require('../middlewares/middelware')

router.post('/register', Controller.fansRegister);
router.post('/login', Controller.login);

router.use(authentication)

router.get('/clubs', Controller.myClubs)
router.post('/clubs/:clubId', Controller.addClub);

module.exports = router