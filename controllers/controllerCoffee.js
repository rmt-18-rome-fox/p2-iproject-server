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

const getOneCoffeePowder = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await CoffeePowder.findByPk(id);

    if (result) {
      res.status(200).json(result);
    } else if (!result) {
      throw { name: 'notFound' };
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { getCoffeePowder, getOneCoffeePowder };
