const { Note } = require('../models');

const getNotes = async (req, res, next) => {
    try {
        const notes = await Note.findAll();

        res.status(200).json(notes);
    } catch (err) {
        next(err);
    }
}

const postNote = async (req, res, next) => {
    try {
        const newNote = await Note.create({
            title: req.body.title,
            status: req.body.status,
            content: req.body.content,
            label: req.body.label,
            UserId: req.user.id
        });

        res.status(201).json({
            id: newNote.id,
            title: newNote.title,
            content: newNote.content,
            status: newNote.status,
            label: newNote.label,
            UserId: newNote.UserId
        })
    } catch (err) {
        next(err);
    }
}

const deleteNote = async (req, res, next) => {
    try {
        const note = await Note.findByPk(+req.params.id);

        if (note) {
            await Note.destroy({
                where: {
                    id: +req.params.id
                }
            });

            res.status(200).json({message: `Note with id ${+req.params.id} has been deleted`});
        } else {
            throw {name: `NotFound`}
        }
    } catch (err) {
        next(err);
    }
}

module.exports = { getNotes, postNote, deleteNote };