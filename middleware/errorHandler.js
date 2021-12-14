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

        case "PostNotFound":
            code = 404
            errMessage = "Error Post Not Found"
            break;

        case "required":
            code = 400
            errMessage = "Please insert email and password"
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

        case "Forbidden":
            code = 403
            errMessage = "Forbidden Access"
            break;

        case "thisisnotimage":
            code = 400
            errMessage = "Type of image should be jpg , png , or jpeg"
            break;

        case "noimage":
            code = 400
            errMessage = "Please Pick An Image"
            break;

        case "notcustomer":
            code = 403
            errMessage = "Only Customer Can Add Favorite Game"
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