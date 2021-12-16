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
      Bookmark.belongsTo(models.User, {foreignKey: "userId"})
    }
  };
  Bookmark.init({
    userId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    authors: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    subjects: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Bookmark',
  });
  return Bookmark;
};