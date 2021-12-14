'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bookmark extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Bookmark.init({
    name_club: DataTypes.STRING,
    fixture: DataTypes.DATE,
    league: DataTypes.STRING,
    venue: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Bookmark',
  });
  return Bookmark;
};