const errorHandlers = (err, req, res, next) => {
  console.log(err);
  if (err.name === 'SequelizeValidationError') {
    const tampungErrors = err.errors.map((el) => el.message);
    console.log(tampungErrors);
    res.status(400).json({ message: tampungErrors.toString() });
  } else if (err.name === 'emailIsRequired') {
    res.status(400).json({ message: 'Email is required' });
  } else if (err.name === 'passwordIsRequired') {
    res.status(400).json({ message: 'Password is required' });
  } else if (err.name === 'SequelizeUniqueConstraintError') {
    res.status(400).json({ message: err.errors[0].message });
  } else if (err.name === 'wrongEmailPass') {
    res.status(401).json({ message: 'Invalid email/password' });
  } else if (err.name === 'userNotFound' || err.name === 'JsonWebTokenError') {
    res.status(401).json({ message: 'Invalid token' });
  } else if (err.name === 'heroNotFound') {
    res.status(404).json({ message: 'Hero not found' });
  } else if (err.name === 'forbidden') {
    res.status(403).json({ message: 'You are not authorized' });
  } else {
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = errorHandlers;
