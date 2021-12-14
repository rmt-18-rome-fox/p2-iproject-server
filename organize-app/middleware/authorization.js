const { Task } = require('../models/index')

const authorization = async (req, res, next) => {
    try {
        if (req.user.role === 'Admin') {
            next()
        } else {
            const id = req.params.id
            const findProduct = await Task.findByPk(id)
            if (!findProduct) {
                throw { name: 'notFound' }
            }
            // if (findProduct.authorId !== req.user.id) {
            //     throw { name: 'unauthorized' }
            // }
            if (req.user.role === "Staff"){
                if (findProduct.AuthorId !== req.user.id){
                    throw {name: 'unauthorized'}
                }
            }
            next()
        }
    } catch (err) {
        next(err)
    }
}

module.exports = authorization