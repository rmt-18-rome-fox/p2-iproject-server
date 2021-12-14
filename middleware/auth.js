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
    };

    next();
  } catch (err) {
    next(err);
  }
};

const authorization = async (req, res, next) => {
  //   try {
  //     const userId = req.user.id;
  //     const id = req.params.heroId;
  //     console.log(userId, id);
  //     // console.log(userId, id);
  //     const findHero = await Hero.findByPk(id);
  //     if (!findHero) {
  //       throw { name: 'heroNotFound' };
  //     }
  //     const findFavourite = await Favourite.findOne({ where: { heroId: id } });
  //     // console.log(findFavourite);
  //     if (!findFavourite) {
  //       throw { name: 'heroNotFound' };
  //     }
  //     if (findFavourite.userId !== userId) {
  //       throw { name: 'forbidden' };
  //     }
  //     next();
  //   } catch (err) {
  //     next(err);
  //   }
};

module.exports = { authentication, authorization };
