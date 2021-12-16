const router = require('express').Router();
const Controller = require('../controllers/like-controller')

router.get('/', Controller.getLike);
router.post('/:postId', Controller.postLike);
router.delete('/:likeId', Controller.removeLike);

module.exports = router