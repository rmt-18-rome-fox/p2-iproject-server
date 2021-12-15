const errHandler = (err, req, res, next) => {
  console.log(err.name);
  switch (err.name) {
    case 'SequelizeValidationError':
      res.status(400).json({message: err.errors[0].message})
      break;
    default:
      res.status(500).json({message: 'Internal Server Error'}, err)
      break;
  }
};

module.exports = { errHandler }