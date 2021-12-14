const { User } = require("../models");
const { decryptToken } = require("../helpers/jwt");

const authentication = async (req, res, next) => {
  const { access_token } = req.headers;
  if (!access_token) throw { name: "unathorized" };

  const userData = decryptToken(access_token);
  if (!userData) throw { name: "unatorized" };

  console.log(userData);
};

module.exports = { authentication };
