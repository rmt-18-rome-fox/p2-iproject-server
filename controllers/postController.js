const unsplash = require("../APIs/unsplash");
const axios = require("axios");
const { Post } = require("../models");
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
}
module.exports = PostController;
