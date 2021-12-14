const { Task, User, Category } = require('../models')

class TaskController {
    static async allTasks(req, res, next) {
        try {
            const userId = req.user.id
            const findTask = await Task.findAll({ include: Category });
            res.status(200).json({ findTask, userId })
        } catch (err) {
            next(err)
        }
    }
    static async addTask(req, res, next) {
        try {
            const UserId = req.user.id
            // console.log(UserId, "userId<<<<<");
            const { title, description, CategoryId } = req.body;
            console.log(title, description, CategoryId);
            if (!title || !description || !CategoryId) {
                throw { name: 'badRequest' }
            }
            const resultCreated = await Task.create({ title, description, CategoryId, UserId })
            res.status(201).json({ resultCreated })
        } catch (err) {
            console.log(err);
            next(err)
        }
    }
    static async taskById(req, res, next) {
        try {
            const taskId = req.params.id
            const resultDetail = await Task.findByPk(taskId)
            if (!resultDetail) {
                throw { name: 'notFound' }
            }
            res.status(200).json(resultDetail)
        } catch (err) {
            next(err)
        }
    }
    static async editTask(req, res, next) {
        try {
            const UserId = req.user.id
            const id = req.params.id
            const { title, description, CategoryId } = req.body;
            console.log({title, description, CategoryId});
            if (!title || !description || !CategoryId) {
                throw { name: 'badRequest' }
            }
            await Task.update({ title, description, CategoryId, UserId },{
                where: {id}
            })
            const resultUpdated = await Task.findByPk(id)
            console.log(resultUpdated);
            if (resultUpdated) {
                res.status(200).json({ resultUpdated })
            } else {
                // console.log('masukkkkkk');
                throw { name: 'notFound' }
            }
        } catch (err) {
            console.log(err);
            next(err)
        }
    }
    static async deleteTask(req, res, next){
        try{
            const id = req.params.id
            const result = await Task.findByPk(id)
            const resultDeleted = await Task.destroy({where: {id: id}})
            if(resultDeleted){
                res.status(200).json(result)
            } else {
                throw{name: "notFound"}
            }
        }
        catch (err){
            next(err)
        }
    }
}


module.exports = TaskController;