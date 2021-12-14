const { User, CoffeePowder, OrderDetail } = require('../models');
const { signToken, verifyToken } = require('../helpers/jwt');
const { hashPassword, comparePassword } = require('../helpers/bcrypt');

const getCoffeePowder = async (req, res, next) => {
  try {
    const result = await CoffeePowder.findAll();
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = { getCoffeePowder };
