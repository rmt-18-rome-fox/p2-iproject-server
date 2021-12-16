const { Category } = require('../models')

class categoryController {
    static async showCategory(req, res) {
        try {
            const response = await Category.findAll()
            res.status(200).json(response)
        } catch (err) {
            res.status(500).json(err)
            console.log(err);
        }
    }

    static async addCategory(req, res) {
        try {
            const {name} = req.body

            // console.log(req.body);

            const response = await Category.create({name})
            // console.log(response, "INI RESPON");
            if (!response) {
                throw {name : "unauthorized"}
            }

            res.status(201).json(response)
            
        } catch (err) {
            if (err.name === 'SequelizeValidationError' || err.name === 'SequelizeUniqueConstraintError') {
                res.status(400).json({ message: err.errors.map((el) => el.message) })
                console.log(err.errors)
            } else {
                res.status(500).json(err)
                console.log(err);
            }
        }
    }

    static async deleteCategory(req, res) {
        try {
            
        } catch (error) {
            
        }
    }
}

module.exports = categoryController