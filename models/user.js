"use strict";
const { Model } = require("sequelize");
const hashPassword = require("../helpers/passwordHash");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Movie, {
        foreignKey: "UserId",
        through: models.Booking,
      });
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: { isEmail: true, notEmpty: true },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { len: [5, 32], notEmpty: true },
      },
    },
    {
      sequelize,
      hooks: {
        beforeCreate: (instance) => {
          instance.password = hashPassword(instance.password);
        },
        modelName: "User",
      },
    }
  );
  return User;
};
