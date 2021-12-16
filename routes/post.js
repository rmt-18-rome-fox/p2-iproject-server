const router = require('express').Router();
const {authorization} = require('../middlewares/middelware');
const Controller = require('../controllers/post-controller');
const imageKit = require('../middlewares/imageKit');
const upload = require('../middlewares/multer');

router.get('/', Controller.showPosts)

router.post('/', upload.single('imgUrl'), imageKit, Controller.addPost)

module.exports = router;