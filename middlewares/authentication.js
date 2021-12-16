const verifyToken = require("../helpers/verifyToken");

const authentication = (req, res, next) => {
  const access_token = req.headers.access_token;
  if (!access_token) {
    throw { name: `notLoggedIn` };
  }
  try {
    const user = verifyToken(access_token);
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = authentication;
