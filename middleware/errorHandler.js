const errorHandler = (err,req,res,next)=>{
    let code = 500
    let errMessage = `Internal Server Error`

    switch (err.name) {
        case "SequelizeValidationError":
            code = 400
            errMessage = err.errors[0].message
            break;

        case "SequelizeUniqueConstraintError":
            code = 400
            errMessage = err.errors[0].message
            break;

        case "NoGame":
            code = 404
            errMessage = "Error Game Not Found"
            break;

        case "email":
            code = 400
            errMessage = "Please Insert Email"
            break;

        case "password":
            code = 400
            errMessage = "Please Insert Password"
            break;

        case "wrong":
            code = 401
            errMessage = "wrong password/email"
            break;

        case "JsonWebTokenError":
            code = 401
            errMessage = "Unauthorized"
            break;

        case "UserNotFound":
            code = 401
            errMessage = "Unauthorized"
            break;

        
        case "alreadyfavorite":
            code = 400
            errMessage = "You Already Favorite This Game"
    
            break;
        default:
            break;
    }

    res.status(code).json({ message: errMessage })
}

  module.exports = errorHandler