const router = require('express').Router();
const user = require('./user');
const fans = require('./fans');
const post = require('./post');
const like = require('./like');
const Controller = require('../controllers/user-controller');
const ballController = require('../controllers/ball-controller');
const {authGoogle} = require('../controllers/auth-controller');
const {authentication} = require('../middlewares/middelware');

router.use('/users', user);
router.use('/fans', fans);
router.post('/login', Controller.login);
router.post('/authGoogle', authGoogle);

router.use(authentication);

router.get('/standing', ballController.getStandings);
router.get('/news', ballController.getNews);
router.use('/post', post);
router.use('/likes', like);

module.exports = router;