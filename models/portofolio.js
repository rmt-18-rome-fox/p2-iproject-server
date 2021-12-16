'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Portofolio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Portofolio.belongsTo(models.User)
      Portofolio.belongsToMany(models.Tag, {through: models.PortofoliosTag})
    }
  };
  Portofolio.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: 'Title is required'},
        notEmpty: {msg: 'Title is required'}
      }
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: 'Image URL is required'},
        notEmpty: {msg: 'Image URL is required'},
        isUrl: {msg: 'Invalid URL format'}
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: 'Description is required'},
        notEmpty: {msg: 'Description is required'}
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {msg: 'UserId is required'},
        notEmpty: {msg: 'UserId is required'}
      }
    }
  }, {
    sequelize,
    modelName: 'Portofolio',
  });
  return Portofolio;
};