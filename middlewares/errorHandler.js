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
    default:
      res.status(500).json({
        message: 'Internal server error',
        error
      })
      break;
  }
}

module.exports = errorHandler