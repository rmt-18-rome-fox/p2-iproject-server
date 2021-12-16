const { Post } = require('../models')

class PostController {
  static async getPosts (req, res, next) {
    try {
      const data = await Post.findAll()
      res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }
  static async post (req, res, next) {
    const { 
      description ,
      tag,
    } = req.body

    try {
      const post = await Post.create({
        description,
        tag,
        imageUrl: req.dataUpload.url,
        UserId: req.auth.id
      })

      res.status(200).json({
        message: "Success post",
        post
      })
    } catch (error) {
      next(error)
    }
  }
  static async putPost (req, res, next) {
    const {
      description, 
      tag, 
      status
    } = req.body
    const { id } = req.params

    try {
      const updatePost = await Post.update({
        description, 
        tag, 
        imageUrl: req.dataUpload.url,
        status
      },
      {
        where: {
          id,
          UserId: req.auth.id
        },
        returning: true
      })

      res.status(200).json({
        message: `Success update post id ${id}`,
        data: updatePost[1]
      })
    } catch (error) {
      next(error)
    }
  }
  static async deletePost (req, res, next) {
    const { id } = req.params
    
    try {
      await Post.destroy({
        where: {
          id,
          UserId: req.auth.id
        }
      })
      
      res.status(200).json({
        message: `Post data with id ${id} has deleted !`
      })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = PostController