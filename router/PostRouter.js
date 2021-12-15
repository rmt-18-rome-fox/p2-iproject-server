const posts = require('express').Router()
const authentication = require('../middleware/authentication')
const PostController = require('../controller/PostController')
const { instanceMulter } = require('../middleware/multer')
const { fileUpload } = require('../middleware/fileUpload')
const { postAuthorization } = require('../middleware/authorization')

posts.get('/', PostController.getPosts)

posts.post(
  '/post',
  instanceMulter.single('postImage'),
  fileUpload,
  PostController.post
)

posts.put('/post/:id',
  postAuthorization,
  instanceMulter.single('postImage'),
  fileUpload,
  PostController.putPost
)

posts.delete('/delete/:id', 
  postAuthorization,
  PostController.deletePost
)

module.exports = posts