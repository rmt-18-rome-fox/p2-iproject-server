const errHandler = (err, req, res, next) => {
    let code = 500;
    let message = "Internal Server Error";
    console.log(err);
  
    if (
      err.name === "SequelizeValidationError" ||
      err.name === "SequelizeUniqueConstraintError"
    ) {
      code = 400;
      message = err.errors.map((el) => el.message);
    } else if (err.name === "UserNotFound") {
      code = 401;
      message = "You put the wrong username/password";
    } else if (err.name === "PostNotFound") {
      code = 404;
      message = "Post Not Found";
    } else if (err.name === "JsonWebTokenError") {
      code = 401;
      message = "Must Login";
    } else if (err.name === "UnauthorizedAccess") {
      code = 403;
      message = "Access Denied";
    } else if (err.name === "WrongFileType") {
      code = 400;
      message = "Only image can be uploaded";
    } else if (err.code === "LIMIT_FILE_SIZE") {
      code = 400;
      message = "File size is too large max size is 500kb";
    } else if (err.name === "ClubNotFound") {
        code = 404;
        message = "Club Not Found";
      }
  
    res.status(code).json({
      statusCode: code,
      message,
    });
  };
  
  module.exports = { errHandler };