const unsplash = require("../APIs/unsplash");
const axios = require("axios");
const { Post, User, Comment } = require("../models");
const { toJSON, parse, stringify } = require("flatted");

class PostController {
  static async getPosts(req, res, next) {
    try {
      const resp = await axios.get("https://api.unsplash.com/photos/?client_id=r1SefPkNwhnq5e0uDLUG4jZ67qS6BRkOMi_Qy_Y4loU");

      const postUsers = await Post.findAll();
      //   console.log(toJSON(resp));
      res.status(200).json({
        result: resp.data,
        postUsers,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async addPost(req, res, next) {
    try {
      //   console.log(req.imageUrl);
      const UserId = req.user.id;
      const imageUrl = req.imageUrl;
      const { title, description } = req.body;
      const newPost = { title, description, imageUrl, UserId };

      const findUser = await User.findByPk(UserId);
      if (!findUser) {
        throw { name: "Not Found", message: "User not found" };
      }
      const post = await Post.create(newPost);
      //   console.log(post);
      res.status(201).json(post);
    } catch (err) {
      //   console.log(err);
      next(err);
    }
  }

  static async getPostsById(req, res, next) {
    try {
      const id = req.params.postId;

      const findPost = await Post.findByPk(id);
      if (!findPost) {
        throw { name: "Not Found", message: "Post not found" };
      }
      const findAllCommentWithPostId = await Comment.findAll({
        where: {
          PostId: id,
        },
      });
      if (!findAllCommentWithPostId) {
        throw { name: "Not Found", message: "Comment not found" };
      }
      res.status(200).json({
        post: findPost,
        comment: findAllCommentWithPostId,
      });
    } catch (err) {
      console.log(err);
    }
  }
}
module.exports = PostController;
