
const errorHandler = (err, req, res, next) => {
  if (err.name === "SequelizeValidationError" || err.name === "SequelizeUniqueConstraintError") {
    res.status(400).json({message : err.errors.map((el) => el.message)})
  }  else if (err.name === "badReqtues") {
    res.status(400).json({message : "Bad Request"})
  } else if (err.name === "Food_not_found") {
    res.status(401).json({message : "Food not found"})
  } else if (err.name === "unauthorized") {
    res.status(401).json({message : "wrong email/ password"})
  } else if (err.name === "forbidden") {
    res.status(403).json({message: "Forbidden to access"})
  } else if (err.name === "JsonWebTokenError") {
    res.status(401).json({message : 'invalid token'})
  } else if (err.name === "no_access_token"){
    res.status(403).json({message : 'Please Login First'})
  } else if (err.name === "user_not_found") {
    res.status(401).json({message : 'user not found'})
  } else if (err.name === "favourite_not_found") {
    res.status(404).json({message : 'Favourite not found'})
  } else if (err.name === "upgradeAccount") {
    res.status(401).json({message : 'You must upgrade your account'})
  } else {
    res.status(500).json({message:'Internal server error'})
  }
  console.log(err);
}

module.exports = errorHandler
