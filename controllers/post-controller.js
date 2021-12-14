const {Post} = require('../models')

class Controller {
    static async showPosts(req, res, next) {
        try {
            const showPost = await Post.findAll({
                include: {
                    all: true
                }
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

    static async putPost(req, res, next) {
        try {
            const userId = req.user.id;
            const img = req.urlSent;
            const {id} = req.params;

            const editPost = {
                imgUrl: img,
                caption: req.body.caption,
                UserId: userId
            }
            const findPost = await Post.findByPk(id)
            if(!findPost) {
                throw {name: 'PostNotFound'}
            }

            if(findPost.UserId !== userId) {
                throw {name: 'UnauthorizedAccess'}
            }

            const editedPost = await Post.update(editPost, {where: {id}, returning: true},);

            res.status(200).json({editedPost: editedPost[1][0]});
        } catch (err) {
            next(err)
        }
    }

    static async deletePost(req, res, next) {
        try {
            const {id} = req.params;
            const findPost = await Post.findByPk(id);

            if(!findPost) {
                throw {name: 'PostNotFound'};
            }

            res.status(200).json('post has been deleted');
        } catch (err) {
            next(err)
        }
    }

}

module.exports = Controller