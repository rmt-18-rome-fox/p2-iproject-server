const ErrorHandler = async (err, req, res, next) => {
  let errCode = 500
  let errMessage = "Internal Server Error"

  switch (err.name) {
    case 'SequelizeValidationError': case 'SequelizeUniqueConstraintError':
      errCode = 400
      errMessage = err.errors[0].message
      break;
    case 'JsonWebTokenError': case 'INVALID_TOKEN':
      errCode = 401
      errMessage = 'Invalid token'
      break;
    case 'EMAIL_REQUIRED':
      errCode = 400
      errMessage = 'Email is required'
      break;
    case 'PASSWORD_REQUIRED':
      errCode = 400
      errMessage = 'Password is required'
      break;
    case 'INVALID_USER':
      errCode = 401
      errMessage = 'Invalid email/password'
      break;
    case 'FORBIDEN':
      errCode = 403
      errMessage = 'You are not authorized'
      break;
  
    default:
      break;
  }


  res.status(errCode).json({ message: errMessage })
}

module.exports = ErrorHandler