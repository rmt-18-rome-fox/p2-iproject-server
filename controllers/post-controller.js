const {Post} = require('../models')

class Controller {
    static async showPosts(req, res, next) {
        try {
            const showPost = await Post.findAll({
                include: {
                    all: true
                },
                order: [['createdAt', 'DESC']]
            });
            res.status(200).json(showPost);
        } catch (err) {
            next(err)
        }
    }

    static async addPost(req, res, next) {
        try {
            const userId = req.user.id;
            const img = req.urlSent;

            const newPost = {
                imgUrl: img,
                caption: req.body.caption,
                UserId: userId
            }

            const addPost = await Post.create(newPost);
            res.status(201).json(addPost)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = Controller