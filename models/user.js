'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    email:{
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
      validate:{
        notNull: {msg :"Email is required"},
        notEmpty: {msg :"Email is required"},
        isEmail: {msg :"Invalid email format"},

      }
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      validate:{
        notNull: {msg :"Password is required"},
        notEmpty: {msg :"Password is required"},
      }
    },
    username:{
      allowNull: false,
      type: DataTypes.STRING,
      validate:{
        notNull: {msg :"Username is required"},
        notEmpty: {msg :"Username is required"},
      }
    },
    role: {
      allowNull: false,
      type: DataTypes.STRING,
      validate:{
        notNull: {msg :"Role is required"},
        notEmpty: {msg :"Role is required"},
      }
    },
    phoneNumber: {
      allowNull: false,
      type: DataTypes.STRING,
      validate:{
        notNull: {msg :"Phone Number is required"},
        notEmpty: {msg :"Phone Number is required"},
      }
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};