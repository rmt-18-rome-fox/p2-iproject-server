const { User, Topic, Reply } = require('../models');

class TopicController {
    static async postTopic (req, res, next) {
        console.log(`post Topic field`)
        try {
            
            const UserId = req.user.id
            console.log(UserId, `UserId`)
            
            const { post, like, imageUrl } = req.body
            if (!post) {
                throw ({
                    name: `Bad Request`,
                    message: `Post is required`,
                })
            }

            let newTopic = { post, like, imageUrl } 

            const result = await Topic.create(newTopic)

            res.status(201).json ({
                message: `Topic has beed created`
            })
            
        } catch (err) {
            next(err)
        }
    }

    static async getTopic (req, res, next) {
        try {
            const result = await Topic.findAll ({
                include: [
                    {
                        model: Reply,
                    },
                    {
                        model: User,
                        attributes: {
                            exclude: ["password", "createdAt", "updatedAt"]
                        }
                    },
                ],
            })
            console.log(result, `result getTopic field`)
            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = TopicController