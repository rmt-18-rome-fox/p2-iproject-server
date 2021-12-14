'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bookmark extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Bookmark.belongsTo(models.User)
    }
  };
  Bookmark.init({
    name_club: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg : "name club is required"},
        notEmpty: { msg: "name club is required"}
      }
    },
    fixture: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: { msg : "fixture is required"},
        notEmpty: { msg: "fixture is required"}
      }
    },
    league: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg : "league is required"},
        notEmpty: { msg: "league is required"}
      }
    },
    venue: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg : "venue is required"},
        notEmpty: { msg: "venue is required"}
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg : "User is required"},
        notEmpty: { msg: "User is required"}
      }
    },
  }, {
    sequelize,
    modelName: 'Bookmark',
  });
  return Bookmark;
};