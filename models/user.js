"use strict";
const { Model } = require("sequelize");
const { hash } = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Book, { foreignKey: "SellerId" });
      User.belongsToMany(models.Book, {
        through: "Carts",
        foreignKey: "CustomerId",
      });
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Name field must not be empty",
          },
          notEmpty: {
            msg: "Name field must not be empty",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Email field must not be empty",
          },
          notEmpty: {
            msg: "Email field must not be empty",
          },
          isEmail: {
            msg: "Invalid email format",
          },
        },
        unique: {
          msg: "Email has already been taken",
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Password field must not be empty",
          },
          notEmpty: {
            msg: "Password field must not be empty",
          },
          len: {
            args: [5, Infinity],
            msg: "Password should be longer than 5 characters",
          },
        },
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Role field must not be empty",
          },
          notEmpty: {
            msg: "Role field must not be empty",
          },
        },
      },
      cityName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "City Name field must not be empty",
          },
          notEmpty: {
            msg: "City Name field must not be empty",
          },
        },
      },
      CityId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "City ID field must not be empty",
          },
          notEmpty: {
            msg: "City ID field must not be empty",
          },
        },
      },
    },
    {
      hooks: {
        beforeCreate: (user, options) => {
          user.password = hash(user.password);
        },
      },
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
