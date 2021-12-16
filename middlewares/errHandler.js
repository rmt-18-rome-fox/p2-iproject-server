const errHandler = (err, req, res, next) => {
  console.log(err.name);
  switch (err.name) {
    case 'SequelizeValidationError':
      res.status(400).json({message: err.errors[0].message})
      break;
    case 'accountExisted':
      res.status(400).json({message: 'Account already exist!'})
      break;
    case 'noEmail':
      res.status(400).json({message: 'Email is required'})
      break;
    case 'noPassword':
      res.status(400).json({message: 'Password is required'})
      break;
    case 'invalidLogin':
      res.status(401).json({message: 'Invalid email/password'})
      break;
    case 'unauthorizedUser':
      res.status(401).json({message: 'Invalid token'})
      break;
    case 'getCarbonFootprintFail':
      res.status(500).json({message: 'Internal Server Error: Failed request on Carbon Interface API'})
      break;
    case 'mapboxFailed':
      res.status(500).json({message: 'Internal Server Error: Failed request on mapbox API'})
      break;
    default:
      res.status(500).json({message: 'Internal Server Error'})
      break;
  }
};

module.exports = { errHandler }