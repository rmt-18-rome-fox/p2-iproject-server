function errorHandler(err, req, res, next) {
  switch (err.name) {
    case "emptyOrigin":
      res.status(400).json({ message: "Origin field must not be empty" });
      break;
    case "emptyDestination":
      res.status(400).json({ message: "Destination field must not be empty" });
      break;
    case "emptyWeight":
      res.status(400).json({ message: "Weight field must not be empty" });
      break;
    case "emptyCourier":
      res.status(400).json({ message: "Courier field must not be empty" });
      break;
    case "SequelizeValidationError":
      res.status(400).json({ message: err.errors[0].message });
      break;
    case "SequelizeUniqueConstraintError":
      res.status(400).json({ message: err.errors[0].message });
      break;
    case "emptyName":
      res.status(400).json({ message: "Name field must not be empty" });
      break;
    case "emptyEmail":
      res.status(400).json({ message: "Email field must not be empty" });
      break;
    case "emptyPassword":
      res.status(400).json({ message: "Password field must not be empty" });
      break;
    case "emptyCity":
      res.status(400).json({ message: "City field must not be empty" });
      break;
    case "loginFailed":
      res.status(401).json({ message: "Wrong email or password" });
      break;
    case "unathorized":
      res.status(403).json({ message: "Invalid token" });
      break;
    default:
      res.status(500).json({ message: err });
      break;
  }
}

module.exports = { errorHandler };
