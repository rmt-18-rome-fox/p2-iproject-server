const router = require('express').Router()
const Controller = require('../controllers')
const upload = require('../middlewares/multer')

router.get('/', Controller.welcome)
router.post('/meetings', upload('image'), Controller.addMeeting)
router.get('/meetings', Controller.getMeetings)

module.exports = router