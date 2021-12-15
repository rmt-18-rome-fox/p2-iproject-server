const errorHandler = (err, req, res, next) => {
  switch (err.name) {
    case "SequelizeValidationError":
    case "SequelizeUniqueConstraintError":
      res.status(400).json({ message: err.errors[0].message });
      break;
    case "noInput":
      res.status(400).json({ message: "Email/password is empty" });
      break;
    case "Invalid":
      res.status(401).json({ message: "Invalid email/password" });
      break;
    case "notFound":
      res.status(404).json({ message: "Product not found" });
      break;
    case "Forbidden":
      res.status(403).json({ message: "You are not allowed" });
      break;
    case "JsonWebTokenError":
      res.status(401).json({ message: "Invalid token" });
      break;
    case "USER_NOT_FOUND":
      res.status(401).json({ message: "Invalid token" });
      break;
    default:
      console.log(err);
      res.status(500).json({ message: "Internal server error" });
      break;
  }
};

module.exports = errorHandler;
