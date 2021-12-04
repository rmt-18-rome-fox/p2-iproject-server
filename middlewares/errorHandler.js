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
    default:
      res.status(500).json({ message: err.message });
      break;
  }
}

module.exports = { errorHandler };
