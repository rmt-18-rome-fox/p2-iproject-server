function errorHandler(err, req, res, next) {
  switch (err.name) {
    case "Bad Request":
      return res.status(400).json({ message: err.message });
      break;
    case "SequelizeValidationError":
      return res.status(400).json(err.errors.map((e) => e.message));
      break;
    case "SequelizeUniqueConstraintError":
      return res.status(400).json(err.errors.map((e) => e.message));
      break;
    case "Not Found":
      return res.status(404).json({ message: err.message });
    case "Unauthorized":
      return res.status(401).json({ message: err.message });
      break;

    default:
      break;
  }
}

module.exports = errorHandler;
