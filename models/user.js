'use strict';
const bcrypt = require('bcrypt')

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
      User.hasMany(models.History, {foreignKey: 'UserId'})
    }
  };
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {msg: 'Name must not be empty'},
      validate: {
        notEmpty: {msg: 'Name is required'},
        notNull: {msg: 'Name is required'}
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Email is required'},
        notNull: {msg: 'Email is required'}
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Password is required'},
        notNull: {msg: 'Password is required'}
      }
    }
  }, {
    hooks: {
      beforeCreate (instance) {
        const salt = bcrypt.genSaltSync(8)
        instance.password = bcrypt.hashSync(instance.password, salt)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};