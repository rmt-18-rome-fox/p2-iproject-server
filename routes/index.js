const router = require('express').Router();
const user = require('./user');
const schedule = require('./schedule');
const footballClub = require('./footballClub');
const fans = require('./fans');
const post = require('./post');
const ballController = require('../controllers/ball-controller')
const {authentication} = require('../middlewares/middelware')

router.use('/users', user);
router.use('/fans', fans);

router.get('/standing', ballController.getStandings)
router.get('/club-info', ballController.getClubs)

router.use(authentication);

router.use('/post', post);
router.use('/clubs', footballClub);
router.use('/schedules', schedule);

module.exports = router;