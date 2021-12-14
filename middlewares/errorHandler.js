function errorHandler(error, req, res, next) {
  console.log(error.name, '<<< error.name')
  console.log(error, '<<< error')

  switch (error.name) {
    case value:
      
      break;
  
    default:
      res.status(500).json({
        message: 'Internal Server error',
        error
      })
      break;
  }
}

module.exports = errorHandler