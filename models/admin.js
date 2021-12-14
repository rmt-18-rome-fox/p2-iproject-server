'use strict';
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
        isEmail: {msg: "Wrong email format"},
        notNull: {msg: "Email must not empty"},
        notEmpty: {msg: "Email must not empty"}
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: "Password must not empty"},
        notEmpty: {msg: "Password must not empty"}
      }
    }
  }, {
    sequelize,
    modelName: 'Admin',
  });
  return Admin;
};