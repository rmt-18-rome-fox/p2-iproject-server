const router = require('express').Router();
const user = require('./user');
const schedule = require('./schedule');
const footballClub = require('./footballClub');
const fans = require('./fans');
const post = require('./post');
const {authentication} = require('../middlewares/middelware')

router.use('/users', user);
router.use('/fans', fans);
router.use('/post', post);
router.use('/clubs', footballClub);

router.use(authentication);

router.use('/schedules', schedule);

module.exports = router;