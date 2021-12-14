const { Note } = require('../models');

const authorization = async (req, res, next) => {
    try {
        const note = await Note.findByPk(+req.params.id);
        if (!note) throw { name: 'NotFound' };
        
        if (req.user.id !== note.UserId) throw { name: 'Forbidden' };
        else {
            next();
        }
    } catch (err) {
        next(err);
    }
}

module.exports = authorization;