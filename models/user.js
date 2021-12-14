'use strict';
const { Model } = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.OrderDetail, { foreignKey: 'UserId' });
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: { msg: 'Email must be unique' },
        validate: {
          notEmpty: { msg: 'Email is required' },
          notNull: { msg: 'Email is required' },
          isEmail: { msg: 'Invalid email format' },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: 'Password is required' },
          notNull: { msg: 'Password is required' },
        },
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: 'First Name is required' },
          notNull: { msg: 'First Name is required' },
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: 'Last Name is required' },
          notNull: { msg: 'Last Name is required' },
        },
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: 'Address is required' },
          notNull: { msg: 'Address is required' },
        },
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: 'Phone Number is required' },
          notNull: { msg: 'Phone Number is required' },
        },
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: 'Role is required' },
          notNull: { msg: 'Role is required' },
        },
      },
    },
    {
      hooks: {
        beforeCreate(instance, option) {
          instance.password = hashPassword(instance.password);
        },
      },
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
