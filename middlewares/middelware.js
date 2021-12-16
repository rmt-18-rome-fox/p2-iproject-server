const {verifyToken} = require('../helpers/jwt');
const {User, Post} = require('../models')

const authentication = async (req, res, next) => {
    const {access_token} = req.headers;
    try {
    
        const payload = verifyToken(access_token);
        
        const user = await User.findOne({
            where: {
                id: payload.id,
                username: payload.username
            }
        })
        if(!user) {
            throw {name: 'JsonWebTokenError'}
        }

        req.user = {
            id: user.id,
            username: user.username,
            role: user.role
        }

        next()
    } catch (err) {
        next(err);
    }

}

const authorization = async (req, res, next) => {
    try {
        const postId = +req.params.id;
        const post = await Post.findByPk(postId)
        if(!post) {
            throw {name: 'PostNotFound'}
        }

        const user = await User.findByPk(req.user.id)

        if(user.role.toLowerCase() === 'admin' || post.UserId === req.user.id) {
            next();
        } else {
            throw {name: 'UnauthorizedAccess'}
        }

    } catch (err) {
        next(err);
    }
}

module.exports = {authentication, authorization};