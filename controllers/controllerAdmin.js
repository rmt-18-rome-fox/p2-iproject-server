const { User, CoffeePowder, OrderDetail } = require('../models');

const postCoffeePowder = async (req, res, next) => {
  try {
    const { name, description, type, roastLevel, grindSize, price, stock, imageUrl } = req.body;
    // console.log('MASUK CONTROLLER');

    const result = CoffeePowder.create({ name, description, type, roastLevel, grindSize, price, stock, imageUrl });

    res.status(201).json({ message: 'Success added new Product Coffee Powder' });
  } catch (err) {
    next(err);
  }
};

const deleteCoffeePowder = async (req, res, next) => {
  try {
    const id = req.params.id;
    const resultDeleted = await CoffeePowder.findByPk(id);

    if (resultDeleted) {
      await CoffeePowder.destroy({
        where: {
          id: id,
        },
      });
      res.status(200).json({ message: `Coffee Powder with name '${resultDeleted.name}' has been deleted` });
    } else {
      throw { name: 'notFound' };
    }
  } catch (err) {
    next(err);
  }
};

const updateCoffeePowder = async (req, res, next) => {
  try {
    const id = req.params.id;
    const resultUpdated = await CoffeePowder.findByPk(id);
    const { name, description, type, roastLevel, grindSize, price, stock, imageUrl } = req.body;

    if (resultUpdated) {
      await CoffeePowder.update(
        {
          name,
          description,
          type,
          roastLevel,
          grindSize,
          price,
          stock,
          imageUrl,
        },
        {
          where: {
            id: id,
          },
        }
      );
      res.status(200).json({ message: `Coffee Powder with id '${resultUpdated.id}' has been updated` });
    } else {
      throw { name: 'notFound' };
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { postCoffeePowder, deleteCoffeePowder, updateCoffeePowder };
