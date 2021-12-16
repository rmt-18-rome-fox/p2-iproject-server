'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WatchList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      WatchList.belongsTo(models.User)
    }
  };
  WatchList.init({
    title: {
      allowNull:false,
      type: DataTypes.STRING,
      validate: {
        notNull: {msg: "Title is Required"},
        notEmpty: {msg: "Title Cannot Be Empty"},
      }
    },
    priority: {
      allowNull:false,
      type: DataTypes.STRING,
      validate: {
        notNull: {msg: "Priority is Required"},
        notEmpty: {msg: "Priority Cannot Be Empty"},
      }
    },
    status: {
      allowNull:false,
      type: DataTypes.STRING,
      validate: {
        notNull: {msg: "Status is Required"},
        notEmpty: {msg: "Status Cannot Be Empty"},
      }
    },
    image_url: {
      allowNull:false,
      type: DataTypes.STRING,
      validate: {
        notNull: {msg: "Image URL is Required"},
        notEmpty: {msg: "Image URL Cannot Be Empty"},
      }
    },
    UserId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: {msg: "User Id is Required"},
        notEmpty: {msg: "User Id Cannot Be Empty"},
      }
    },
    JikanAnimeId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: {msg: "Jikan Anime Id is Required"},
        notEmpty: {msg: "Jikan Anime Id Cannot Be Empty"},
      }
    }
  }, {
    sequelize,
    modelName: 'WatchList',
  });
  return WatchList;
};