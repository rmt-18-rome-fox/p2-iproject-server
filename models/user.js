'use strict';
const {
  Model
} = require('sequelize');
const { hash } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsToMany(models.Topic, {
        through: `Reply`
        // foreignKey: `UserId`
        // targetKey: `id`
      })
      // User.hasMany(models.UserTopic, {
      //   // through: `UserTopic`,
      //   foreignKey: `UserId`
      // })
    }
  };
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: `Name is required`},
        notNull: { msg: `Name is required`},
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: { msg: `Email must be unique`},
      validate: {
        notEmpty: { msg: `Email is required`},
        notNull: { msg: `Email is required`},
        isEmail: { msg: `Invalid email format`}
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: `Password is required`},
        notNull: { msg: `Password is required`},
      }
    },
    photoUrl: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (user, option) => {
        user.password = hash(user.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};