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
                        include: [
                            {
                                model: User,

                            }
                        ]
                    },
                    {
                        model: User,
                        attributes: {
                            exclude: ["password", "createdAt", "updatedAt"]
                        },
                    },
                ],
                order: [["updatedAt", "DESC"]],
            })
            console.log(result, `result getTopic field`)
            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }

    static async patchLike (req, res, next) {
        try {
            const id = req.params.id
            const foundTopic = await Topic.findByPk(id)
            if (!foundTopic) {
                throw ({ 
                    name: `Error Not Found`,
                    message: `Topic not Found`
                })
                
            } else {
                const like = req.body.like
                const updatelike = await Topic.update({like}, {where: {id}})

            }
        } catch (err) {
            
        }
    }
}

module.exports = TopicController