'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class New extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  New.init({
    title: DataTypes.STRING,
    url: DataTypes.STRING,
    source: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'New',
  });
  return New;
};