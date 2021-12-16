'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Recipe.init({
    label: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Please input label.' },
        notNull: { msg: 'Please input label.' },
      },
    },
    dishType: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Please input dishType.' },
        notNull: { msg: 'Please input dishType.' },
      },
    },
    cuisineType: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Please input cuisineType.' },
        notNull: { msg: 'Please input cuisineType.' },
      },
    },
    dishType: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Please input dishType.' },
        notNull: { msg: 'Please input dishType.' },
      },
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Please input imageUrl.' },
        notNull: { msg: 'Please input imageUrl.' },
      },
    },
    ingredients: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Please input ingredients.' },
        notNull: { msg: 'Please input ingredients.' },
      },
    },
    nutritions: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Please input nutritions.' },
        notNull: { msg: 'Please input nutritions.' },
      },
    }
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};