const router = require('express').Router();
const Controller = require('../controllers/club-controller');
const {authentication} = require('../middlewares/middelware');
const imageKit = require('../middlewares/imagekit');
const upload = require('../middlewares/multer');

router.get('/', Controller.showClub)


router.post('/', authentication, upload.single('clubPict'), imageKit, Controller.addClub)



module.exports = router;