const { User, Profile, Portofolio, PortofoliosTag, Tag } = require('../models')

class ArchitectController {
    static getArchitectPortofolio(req, res, next) {
        Portofolio.findAll({where: {
            UserId: req.user.id
        }})
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            next(err)
        })
    }

    static async addPortofolio(req, res, next) {
        try {
            const { title, description, imageUrl, TagId } = req.body
            if (TagId[0] == '' && TagId[1] == '') throw { name: 'NEED_ONE_TAG' }
            const portofolio = await Portofolio.create({
                title,
                description,
                imageUrl,
                UserId: req.user.id
            })


            await TagId.forEach(tag => {
                PortofoliosTag.create({
                    TagId: tag,
                    PortofolioId: portofolio.id
                })
            })

            res.status(201).json(portofolio)
        } catch (err) {
            next(err)
        }

    }

    static async getEditPortofolioForm(req, res, next) {
        try {
            const { portofolioId } = req.params
            let portofolioAndTags = await Portofolio.findOne({
                where: {
                    id: portofolioId
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                include:
                {
                    model: Tag,
                    key: 'id',
                    attributes: {
                        exclude: ['createdAt', 'updatedAt']
                    },
                }
            })

            res.status(200).json(portofolioAndTags)

        } catch (err) {
            next(err)
        }
    }

    static async editPortofolio(req, res, next) {
        try {
            const { portofolioId } = req.params
            const { title, description, imageUrl, TagId } = req.body
            await Portofolio.update({
                title,
                description,
                imageUrl,
                UserId: req.user.id
            }, {
                where: {
                    id: portofolioId
                }
            })
            const portofolio = await Portofolio.findOne({
                where: {
                    id: req.user.id
                }
            })
            await TagId.forEach(tag => {
                PortofoliosTag.destroy({
                    where: {
                        PortofolioId: portofolio.id
                    }
                })
                PortofoliosTag.create({
                    TagId: +tag,
                    PortofolioId: portofolio.id
                })
            })

            res.status(201).json(portofolio)
        } catch (err) {
            next(err)
        }
    }

    static getArchitectProfile(req, res, next) {
        Profile.findOne({
            where: {
                id: req.user.id
            },
            attributes: {
                exclude: ['updatedAt', 'createdAt']
            }
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                next(err)
            })
    }

    static editProfile(req, res, next) {
        const payload = req.body
        Profile.update(payload, {
            where: {
                UserId: req.user.id
            }
        })
            .then(data => {
                res.status(200).json({ message: 'Profile updated' })
            })
            .catch(err => {
                next(err)
            })
    }

    static deletePortofolio(req, res, next) {
        const { portofolioId } = req.params
        Portofolio.destroy({where: {
            id: portofolioId
        }})
        .then(data => {
            res.status(200).json({message: 'Portofolio Deleted'})
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = ArchitectController