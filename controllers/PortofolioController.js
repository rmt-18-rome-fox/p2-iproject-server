const { User, Profile, Portofolio, Tag } = require('../models')

class PortofolioController {
    static fetchPortofolios(req, res, next) {
        console.log('hehe')
        Portofolio.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'UserId']
            },
            include: [
                {
                    model: User,
                    key: 'id',
                    attributes: {
                        exclude: ['createdAt', 'updatedAt', 'password', 'role']
                    }
                },
                {
                    model: Tag,
                    key: 'id',
                    attributes: {
                        exclude: ['createdAt', 'updatedAt']
                    }
                }
            ]
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static architectPortofolios(req, res, next) {
        const UserId = req.params.architectId
        Portofolio.findAll({
            where: {
                UserId
            },
            include: [{
                model: Tag,
                key: 'id',
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            },
            {
                model: User,
                key: 'id',
                include: {
                    model: Profile,
                    key: 'id'
                }
            }
            ]
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                next(err)
            })
    }

    static fetchOnePortofolio(req, res, next) {
        Portofolio.findOne({
            where: {
                id: req.params.portofolioId
            },
            attributes: {
                exclude: ['UserId', 'createdAt', 'updatedAt']
            },
            include: {
                model: User,
                key: 'id',
                attributes: {
                    exclude: ['password', 'createdAt', 'updatedAt']
                },
                include: {
                    model: Profile,
                    key: 'id',
                    attributes: {
                        exclude: ['createdAt', 'updatedAt']
                    },
                }
            }
        })
            .then(data => {
                if (data == null) throw { name: 'PORTOFOLIO_NOT_FOUND' }
                res.status(200).json(data)
            })
            .catch(err => {
                next(err)
            })
    }

}

module.exports = PortofolioController