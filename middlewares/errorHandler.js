class errorHandler {
    static async errHandler(err, req, res, next) {
        console.log(err.message);
        let errCode = 500;
        let msg = "Internal Server Error"

        

        if (err.name === 'SequelizeValidationError' || 
        err.name === 'SequelizeUniqueConstraintError') {
            errCode = 400,
                msg = err.errors.map((el) => el.message)
        } else if (err.name === 'notFound') {
            errCode = 404,
                msg = `Data is not found`
        } else if (err.name === 'notValid') {
            errCode = 401,
                msg = `username/password is not found`
        } else if (err.name === 'JsonWebTokenError') {
            errCode = 401,
                msg = `Your token is not match`
        } else if (err.name === 'forbidden') {
            errCode = 403,
                msg = `Forbidden to access`
        } else if (err.code === 'LIMIT_FILE_SIZE') {
            errCode = 400,
                msg = `File size must lower than 255KB`
        } else if (err.name === 'sameStatus') {
            errCode = 400,
                msg = `You not change the status`
        } else if (err.name === 'notImage') {
            errCode = 400,
                msg = `Format image is not supported`
        } else if (err.name === 'tooLarge') {
            errCode = 400,
                msg = `File size must lower than 255KB`
        }

       

        res.status(errCode).json({
            msg
        })
    }
}

module.exports = errorHandler