const errorHandlers = async (err, req, res, next) => {
  switch (err.name) {
    case 'Username not found':
      res.status(400).json({message: "Username is Required"})
      break;
    case 'Password not found':
      res.status(400).json({message: "Password is Required"})
      break;
    case "Unauthorized Login":
      res.status(401).json({message: "Invalid Username/Password"})
      break;
    case "SequelizeValidationError":
      res.status(400).json({message: err.errors.map(el => el.message)})
      break;
    case "SequelizeUniqueConstraintError":
      res.status(400).json({message: err.errors[0].message})
      break;
    case "Unauthorized Middleware":
      res.status(401).json({message: "Invalid Token"})
      break;
    case "Forbidden Access":
      res.status(403).json({message: "You Are Not Authorized"})
      break;
    case "WatchList Not Found":
      res.status(404).json({message: err.name})
      break;
    default:
      res.status(500).json(err)
      break;
  }
}

module.exports = errorHandlers