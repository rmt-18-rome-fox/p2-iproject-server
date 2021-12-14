'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcryptjs')
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
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: "Password is required"},
        notEmpty: {msg: "Password is required"}
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {msg: "Email must be unique"},
      validate: {
        notNull: {msg: "Email is required"},
        notEmpty: {msg: "Email is required"},
        isEmail: {msg: "Invalid email format"}
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: "Password is required"},
        notEmpty: {msg: "Password is required"}
      }
    }
  }, {
    hooks: {
      beforeCreate: (instance, option) => {
        let salt = bcrypt.genSaltSync(8);
        let hash = bcrypt.hashSync(instance.password, salt)

        instance.password = hash
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};