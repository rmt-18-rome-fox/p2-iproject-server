'use strict';
const {
  Model
} = require('sequelize');
const {hashPassword}  = require("../helper/formatter")
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Favourite)
    }
  };
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        notNull: {msg: 'Please enter your name'},
        notEmpty: {msg: 'Please enter your name'}
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {msg: "Email must be unique"},
      validate : {
        notEmpty: {msg: 'Please enter your username'},
        notNull: {msg: 'Please enter your username'}
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        notEmpty: {msg: 'Please enter your password'},
        notNull: {msg: 'Please enter your password'},
        len: {
          args: [6],
          msg: 'Minimum password length is 6 characters'
        }
      }
    },
    email: {
      type : DataTypes.STRING,
      allowNull: false,
      unique: {msg: "Email must be unique"},
      validate : {
        notEmpty: {msg: 'Please enter your email'},
        notNull: {msg: 'Please enter your email'},
        isEmail: {msg : 'Wrong email format'}
      }
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        notEmpty: {msg: 'Please enter your phone number'},
        notNull: {msg: 'Please enter your phone number'},
      }
    },
    address: {
      type : DataTypes.STRING,
      allowNull: false,
      validate : {
        notEmpty: {msg: 'Please enter your address'},
        notNull: {msg: 'Please enter your address'},
      }
    },
  }, {
    sequelize,
        hooks: {
      beforeCreate: (instances, options) => {
        instances.password = hashPassword(instances.password)
      }
    },
    modelName: 'User',
  });
  return User;
};