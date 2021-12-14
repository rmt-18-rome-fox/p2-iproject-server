const {User, Portofolio} = require('../models')

class PortofolioController {
    static fetchPortofolios(req, res, next) {
        console.log('hehe')
        Portofolio.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'UserId']
            },
            include: {
                model: User,
                key: 'id',
                attributes: {
                    exclude: ['createdAt', 'updatedAt', 'password']
                }
            }
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}

module.exports = PortofolioController