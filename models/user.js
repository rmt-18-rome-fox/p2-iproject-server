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
    username: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {msg: "Username Is Required"},
        notEmpty: {msg: "Message Cannot Be Empty"},
        minLength(value){
          if(value.length < 5) throw new Error('Username Should Be At Least 5 Characters')
        }
      }
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {msg: "Password Is Required"},
        notEmpty: {msg: "Password Cannot Be Empty"},
        minLength(value){
          if(value.length < 5) throw new Error('Password Should Be At Least 5 Characters')
        }
      }
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {msg: "Email Is Required"},
        notEmpty: {msg: "Email Cannot Be Empty"},
        isEmail: {msg: "Wrong Email Format"}
      }
    },
    fullName: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {msg: "Full Name Is Required"},
        notEmpty: {msg: "Full Name Cannot Be Empty"}
      }
    },
    age: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {msg: "Age Is Required"},
        notEmpty: {msg: "Age Cannot Be Empty"},
        isNumeric: {msg: "Age Should Be Number"}
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