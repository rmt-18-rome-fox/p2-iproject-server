'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Topic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Topic.init({
    post: DataTypes.STRING,
    like: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    locationLatitude: DataTypes.FLOAT,
    locationLongitude: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Topic',
  });
  return Topic;
};