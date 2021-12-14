const { User, CoffeePowder, OrderDetail } = require('../models');
const { signToken, verifyToken } = require('../helpers/jwt');

const authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers;
    if (!access_token) {
      throw { name: 'userNotFound' };
    }

    const payload = verifyToken(access_token);
    const user = await User.findByPk(payload.id);
    if (!user) {
      throw { name: 'userNotFound' };
    }

    req.user = {
      id: user.id,
      email: user.email,
      role: user.role,
    };

    next();
  } catch (err) {
    next(err);
  }
};

const authorizationAdminOnly = async (req, res, next) => {
  try {
    const { access_token } = req.headers;
    const payload = verifyToken(access_token);
    console.log(payload);

    const user = await User.findOne({
      where: {
        email: payload.email,
      },
    });

    req.user = {
      id: user.id,
      email: user.email,
      role: user.role,
    };

    if (req.user.role !== 'admin') {
      throw { name: 'forbidden' };
    }
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = { authentication, authorizationAdminOnly };
