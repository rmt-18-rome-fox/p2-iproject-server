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
    try {
      
    } catch (error) {
      next(error)
    }
  }
  static async putPost (req, res, next) {
    try {
      
    } catch (error) {
      next(error)
    }
  }
  static async deletePost (req, res, next) {
    try {
      
    } catch (error) {
      next(error)
    }
  }
}

module.exports = PostController