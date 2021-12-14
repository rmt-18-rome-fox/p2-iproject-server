'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PortofoliosTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  PortofoliosTag.init({
    TagId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {msg: 'TagId is required'},
        notEmpty: {msg: 'TagId is required'}
      }
    },
    PortofolioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {msg: 'PortofolioId is required'},
        notEmpty: {msg: 'PortofolioId is required'}
      }
    }
  }, {
    sequelize,
    modelName: 'PortofoliosTag',
  });
  return PortofoliosTag;
};