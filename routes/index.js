const router = require('express').Router();
const user = require('./user');
const fans = require('./fans');
const post = require('./post');
const like = require('./like');
const Controller = require('../controllers/user-controller')
const ballController = require('../controllers/ball-controller')
const {authentication} = require('../middlewares/middelware')

router.use('/users', user);
router.use('/fans', fans);
router.post('/login', Controller.login);

router.use(authentication);

router.get('/standing', ballController.getStandings)
router.get('/club-info', ballController.getClubs)
router.use('/post', post);
router.use('/likes', like)

module.exports = router;