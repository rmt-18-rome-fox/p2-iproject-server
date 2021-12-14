const post = require('express').Router()
const authentication = require('../middleware/authentication')
const PostController = require('../controller/PostController')

post.get('/', authentication, PostController.getPosts)
post.post('/post', authentication, PostController.post)
post.put('/:id', authentication, PostController.putPost)
post.delete('/delete/:id', authentication, PostController.deletePost)

module.exports = post