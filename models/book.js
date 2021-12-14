"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Book.belongsTo(models.User, { foreignKey: "SellerId" });
      Book.belongsToMany(models.User, {
        through: "Carts",
        foreignKey: "BookId",
      });
    }
  }
  Book.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: `Title field must not be empty`,
          },
          notEmpty: {
            msg: `Title field must not be empty`,
          },
        },
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: `Author field must not be empty`,
          },
          notEmpty: {
            msg: `Author field must not be empty`,
          },
        },
      },
      genre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: `Genre field must not be empty`,
          },
          notEmpty: {
            msg: `Genre field must not be empty`,
          },
        },
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: `Image field must not be empty`,
          },
          notEmpty: {
            msg: `Image field must not be empty`,
          },
        },
      },
      publishedYear: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: `Published Data field must not be empty`,
          },
          notEmpty: {
            msg: `Published Data field must not be empty`,
          },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: `Price field must not be empty`,
          },
          notEmpty: {
            msg: `Price field must not be empty`,
          },
        },
      },
      SellerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: `Seller ID field must not be empty`,
          },
          notEmpty: {
            msg: `Seller ID field must not be empty`,
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Book",
    }
  );
  return Book;
};
