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
      res.status(401).json({ message: "Invalid token" });
      break;
    case "forbiddenAccess":
      res.status(403).json({ message: "You are not authorized" });
      break;
    case "bookNotFound":
      res.status(404).json({ message: "Book not found" });
      break;
    case "uniqueBookValidation":
      res.status(404).json({ message: "Book has been added to cart" });
      break;
    case "emptyTitle":
      res.status(400).json({ message: "Title field must not be empty" });
      break;
    case "emptyAuthor":
      res.status(400).json({ message: "Author field must not be empty" });
      break;
    case "emptyGenre":
      res.status(400).json({ message: "Genre field must not be empty" });
      break;
    case "emptyPrice":
      res.status(400).json({ message: "Price field must not be empty" });
      break;
    case "emptyImageUrl":
      res.status(400).json({ message: "Image Url field must not be empty" });
      break;
    case "emptyPublishedYear":
      res
        .status(400)
        .json({ message: "Published Year field must not be empty" });
      break;
    case "cartNotFound":
      res.status(404).json({ message: "Cart not found" });
    case "transactionNotFound":
      res.status(404).json({ message: "Transaction not found" });
      break;
    default:
      res.status(500).json({ message: err.message });
      break;
  }
}

module.exports = { errorHandler };
