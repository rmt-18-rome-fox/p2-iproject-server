'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CoffeePowder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // CoffeePowder.hasMany(models.OrderDetail, { foreignKey: 'CoffeeId' }); // HASMANY 2X
      CoffeePowder.belongsToMany(models.User, { through: models.OrderDetail, foreignKey: 'CoffeeId' }); // BELONGSTOMANY
    }
  }
  CoffeePowder.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      roastLevel: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      grindSize: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: true,
        },
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'CoffeePowder',
    }
  );
  return CoffeePowder;
};
