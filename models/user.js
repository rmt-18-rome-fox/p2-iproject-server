'use strict';
const {
  Model
} = require('sequelize');
const {hashPassword} = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.WatchList)
    }
  };
  User.init({
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {msg: "Email is Required"},
        notEmpty: {msg: "Email Cannot Be Empty"},
        isEmail: {msg: "Wrong Email Format"}
      }
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {msg: "Password is Required"},
        notEmpty: {msg: "Password Cannot Be Empty"},
      }
    },
    fullName: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {msg: "Full Name is Required"},
        notEmpty: {msg: "Full Name Cannot Be Empty"}
      }
    }
  }, {
    hooks:{
      beforeCreate(user){
        user.password = hashPassword(user.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};