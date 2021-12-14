const express = require('express');
const UploadHandler = require('../middlewares/multer.js');
const UploadImage = require('../middlewares/imageKit.js');

const TopicController = require('../controllers/topic.js');
const router = express.Router()

router.get('/', TopicController.getTopic)
router.post('/', UploadHandler, UploadImage, TopicController.postTopic)

module.exports = router