const {User, Post, Like} = require('../models')

class Controller {
    static async getLike(req, res, next) {
        try {
            const userId = req.user.id
            const response = await Like.findAll({
                where: {
                    UserId: userId
                },
                include: {
                    model: Post,
                    include: {
                        model: User
                    }
                },
                order: [['createdAt', 'DESC']]
            })
            res.status(200).json(response)
        } catch (err) {
            next(err)
        }
    }

    static async postLike(req, res, next) {
        try {
            const {postId} = req.params

            const foundPost = await Post.findByPk(postId)

            const likeData = {
                UserId: req.user.id,
                PostId: foundPost.id
            }

            const postLike = await Like.create(likeData)

            res.status(201).json(foundPost)
        } catch (err) {
            next(err)
        }
    }

    static async removeLike(req, res, next) {
        try {
            const {likeId} = req.params
            const foundLike = await Like.findByPk(likeId)
            if(!foundLike) {
                throw {name: 'LikeNotFound'}
            }
            await Like.destroy({
                where: {
                    id: likeId
                }
            })
            res.status(200).json(foundLike)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = Controller