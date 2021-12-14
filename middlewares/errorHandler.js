const errorHandler = (err, req, res, next) => {
    console.log('Error handler');
    console.log(err, '<<< ERROR HANDLER');

    switch (err.name) {
        // case value:
            
        //     break;
        case 'SequelizeValidationError':
            res.status(400).json({ message: err.errors[0].message });
            break;
        default:
            res.status(500).json(err);
            break;
    }
}

module.exports = errorHandler;