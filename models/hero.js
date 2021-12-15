'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Hero.belongsTo(models.User,{foreignKey: "UserId"})
    }
  };
  Hero.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate:{
        notNull: {msg :"name is required"},
        notEmpty: {msg :"name is required"},
      }
    },
    imgUrl: {
      allowNull: false,
      type: DataTypes.STRING,
      validate:{
        notNull: {msg :"imgUrl is required"},
        notEmpty: {msg :"imgUrl is required"},
      }
    },
    location: {
      allowNull: false,
      type: DataTypes.STRING,
      validate:{
        notNull: {msg :"location is required"},
        notEmpty: {msg :"location is required"},
      }
    },
    date:{
      allowNull: false,
      type: DataTypes.DATE,
      validate:{
        notNull: {msg :"date is required"},
        notEmpty: {msg :"date is required"},
      }
    },
    description:{
      allowNull: false,
      type: DataTypes.STRING,
      validate:{
        notNull: {msg :"description is required"},
        notEmpty: {msg :"description is required"},
      }
    },
    UserId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Hero',
  });
  return Hero;
};