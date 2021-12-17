function errorHandler(error, req, res, next) {
  console.log(error.name, '<<< error.name')
  console.log(error, '<<< error')

  switch (error.name) {
    case 'CreateMeetingFailed':
      res.status(400).json({
        message: 'Post meeting failed due to server error',
        error
      })
      break;
    case 'GetMeetingsFailed':
      res.status(400).json({
        message: 'Get meeting failed due to server error',
        error
      })
      break;
    case 'BadRequest':
      res.status(400).json({
        message: 'Missing required input',
        error
      })
      break;
    default:
      res.status(500).json({
        message: 'Internal server error',
        error
      })
      break;
  }
}

module.exports = errorHandler