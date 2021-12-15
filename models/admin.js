'use strict';
const {hashPassword} = require('../helpers/bcrypt')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Admin.hasMany(models.Article)
    }
  };
  Admin.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {msg: "Email already registered"},
      validate: {
        isEmail: {msg: "Invalid email format"},
        notNull: {msg: "Email is required"},
        notEmpty: {msg: "Email is required"}
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: "Password is required"},
        notEmpty: {msg: "Password is required"}
      }
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true
      }
    }
  }, {
    sequelize,
    modelName: 'Admin',
  });

  Admin.beforeCreate((admin, options) => {
    admin.password = hashPassword(admin.password)
  });

  return Admin;
};