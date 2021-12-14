const errorHandler = (err, req, res, next) => {
    
    switch (err.name) {
        case 'SequelizeValidationError' || 'SequelizeUniqueConstraintError':
            res.status(400).json({message: err.errors[0].message})
            break;
        case 'unauthorized':
            res.status(401).json({message: 'error authentication'})
            break;
        case 'invalid':
            res.status(401).json({message: 'invalid email or password'})
            break;
            default: 
            res.status(500).json({
                statusCode: 500,
                message: err.message
            }) 
            break;
    }
}

module.exports = errorHandler