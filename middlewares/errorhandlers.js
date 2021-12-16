const errorHandlers = (err, req, res, next) => {
  console.log(err); //check error here gaes
  if (err.message === `notFound`) {
    res.status(404).json({ message: `data not found` });
  }else if (err.message === `userNotFound`) {
    res.status(404).json({ message: `User not found` });
  }else if (err.message === `password not match`) {
    res.status(401).json({message: err.message});
  } else if (err.name === `badRequest`) {
    res.status(400).json({ message: `validation error` });
  } else if (err.message === "Already Booked") {
    //if Movie already in customer bookings
    res.status(400).json({ message: `Already Booked` });
  } else if (err.message === "Movie not found") {
    //if Movie doesnot exist
    res.status(404).json({ message: `Movie not found` });
  } else if (err.message === "You must be a customer to access this wishlist") {
    //if admin or staff try to access wishlist
    res
      .status(403)
      .json({ message: `You must be a customer to access this wishlist` });
  } else if (err.message === "username, email, & password are required") {
    //if any register value is null
    res.status(400).json({ message: err.message });
  } else if (err.name === "notFound") {
    res.status(401).json({ message: `error invalid username or password` });
  } else if (err.name === "notLoggedIn") {
    res.status(401).json({ message: `error: user not logged in` });
  } else if (err.name === `unauthorized`) {
    res.status(403).send({ message: `forbidden` });
  } else if (err.code === `LIMIT_FILE_SIZE`) {
    res.status(400).json({ message: `maximum file size exceeded 255KB` });
  } else if (err.name === `extFile`) {
    res
      .status(400)
      .json({ message: `image file extenstion must be jpg, jfif, or png` });
  } else if (err.name === "SequelizeUniqueConstraintError") {
    if (err.errors[0].message) {
      res.status(400).json({ message: err.errors[0].message });
    }
  } else if (err.errors[0].type === `Validation error`) {
    if (err.errors[0].message === `Validation isEmail on email failed`) {
      res
        .status(400)
        .json({ message: `email must be using valid email address` });
    }
  } else {
    res.status(500).json({ message: `Internal server error` });
  }
};

module.exports = errorHandlers;
