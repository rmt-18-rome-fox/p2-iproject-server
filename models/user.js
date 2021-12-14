'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Consultation, {foreignKey: "ArchitectId", as: "Architect"} )
      User.hasMany(models.Consultation, {foreignKey: "CustomerId", as: "Customer"})
      User.hasOne(models.Profile)
      User.hasMany(models.Portofolio)
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      unique: {msg: 'Email must be unique'},
      allowNull: false,
      validate: {
        notNull: {msg: 'Email is required'},
        notEmpty: {msg: 'Email is required'},
        isEmail: {msg: 'Invalid email format'}
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: 'Password is required'},
        notEmpty: {msg: 'Password is required'}
      }
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: 'Role is required'},
        notEmpty: {msg: 'Role is required'}
      }
    }
  }, {
    hooks: {
      beforeCreate: (User) => {
        User.password = hashPassword(User.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};