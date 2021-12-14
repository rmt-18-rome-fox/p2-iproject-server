const errorHandler = (err, req, res, next) => {
    console.log(err, '<<< ERROR HANDLER');

    switch (err.name) {
        case 'EmailRequired':
            res.status(400).json({ message: 'Email is required' });
            break;
        case 'PassRequired':
            res.status(400).json({ message: 'Password is required' });
            break;
        case 'Unauthorized':
            res.status(401).json({ message: 'Invalid email/password' });
            break;
        case 'SequelizeValidationError':
            res.status(400).json({ message: err.errors[0].message });
            break;
        case 'SequelizeUniqueConstraintError':
            res.status(400).json({ message: err.errors[0].message });
            break;
        case 'JsonWebTokenError':
            res.status(401).json({ message: 'Invalid token' });
            break;
        case 'NotFound':
            res.status(404).json({ message: 'Content not found' });
            break;
        case 'NotFound':
            res.status(400).json({ message: 'You are not authorized' });
            break;
        case 'MaxWIP':
            res.status(400).json({ message: 'You currently have too much work!' });
            break;
        case 'UniqueTitle':
            res.status(400).json({ message: 'You already have this note before!' });
            break;
        default:
            res.status(500).json(err);
            break;
    }
}

module.exports = errorHandler;