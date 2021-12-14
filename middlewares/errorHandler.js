const errorHandler = (err, req, res, next) => {
  statusCode = 500;
  message = "Internal server error";

  if (
    err.name === "SequelizeValidationError" ||
    err.name === "SequelizeUniqueConstraintError"
  ) {
    statusCode = 400;
    message = err.errors[0].message;
  } else if (err.name === "badRequest") {
    statusCode = 400;
    message = "Please input email and Password";
  } else if (err.name === "wrongLogin") {
      statusCode = 401
      message = "Invalid email/password"
  } else if (err.name === "JsonWebTokenError") {
    statusCode = 401
    message = "Invalid token"
  } else if (err.name === "unauthorized") {
    statusCode = 403
    message = "You are not authorized"
  }

  res.status(statusCode).json({ message });
};

module.exports = errorHandler;
