const { Task, User, Category } = require('../models')
const cloudinary = require('cloudinary');
const axios = require('axios')


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
            // let imgUrl = ''
            await cloudinary.config({
                cloud_name: process.env.CLOUD_CLOUDINARY,
                api_key: process.env.KEY_CLOUDINARY,
                api_secret: process.env.SECRETKEY_CLOUDINARY,
                secure: true
            });
            // console.log(req.file, '<<<<<<req.file')
            cloudinary.v2.uploader.upload(
                req.file.path,
                {
                    resource_type: "image", public_id: req.file.originalname,
                    overwrite: true, notification_url: "http://localhost:3000"
                },
                function (error, result) {
                    // console.log({ result, error })
                   let imgUrl = result.url
                    // console.log(imgUrl);
                    const UserId = req.user.id
                    const { title, description, CategoryId } = req.body;
                    // console.log(title, description, imgUrl, CategoryId);
                    if (!title || !description || !imgUrl || !CategoryId) {
                        throw { name: 'badRequest' }
                    }
                    Task.create({ title, description, imgUrl, CategoryId, UserId })
                        .then(response => {
                            res.status(201).json({ response })
                        })
                        .catch(err => {
                            // console.log('>>>>error', err);
                            next(err)
                        })
                });

        } catch (err) {
            // console.log('error<<<<<<', err);
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
            // console.log({ title, description, CategoryId });
            if (!title || !description || !CategoryId) {
                throw { name: 'badRequest' }
            }
            await Task.update({ title, description, CategoryId, UserId }, {
                where: { id }
            })
            const resultUpdated = await Task.findByPk(id)
            // console.log(resultUpdated);
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
    static async deleteTask(req, res, next) {
        try {
            const id = req.params.id
            const result = await Task.findByPk(id)
            const resultDeleted = await Task.destroy({ where: { id: id } })
            if (resultDeleted) {
                res.status(200).json(result)
            } else {
                throw { name: "notFound" }
            }
        }
        catch (err) {
            next(err)
        }
    }
}

module.exports = TaskController;