'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category.hasMany(models.Product)
      // Category.hasMany(models.Favorite)
    }
  };
  Category.init({
    name: {
      type : DataTypes.STRING,
      allowNull: false,
      validate : {
        notEmpty: {msg : `Category is can not be empty.`},
        notNull : {msg : `Category is can not be empty.`},
      }
    }
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};