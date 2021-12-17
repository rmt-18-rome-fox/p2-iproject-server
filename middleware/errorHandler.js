const errorHandler = (err, req, res, next) => {
    switch (err.name) {
        case 'unauthorized':
            res.status(401).json({message: 'Unauthorized'})
            break
        case 'SequelizeValidationError':
            res.status(400).json({message: err.errors.map(el => el.message)})
            break
        case 'JsonWebTokenError':
            res.status(401).json({message: 'Invalid Token'})
            break
        case 'SequelizeUniqueConstraintError':
            res.status(400).json({message: err.errors.map(el => el.message)})
            break
        case 'invalid email or password':
            res.status(404).json({message: 'Invalid email or password'})
            break;
        default:
            res.status(500).json({message: "Internal server error"})
            break;
    }
}

module.exports = {errorHandler}