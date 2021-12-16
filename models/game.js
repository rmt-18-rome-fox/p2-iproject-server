'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Game.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty : {msg : `Title Is Required!`},
        notNull:   {msg : `Title Is Required!`},
      }
    },
    thumbnail: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty : {msg : `Thumbnail Pic Is Required!`},
        notNull:   {msg : `Thumbnail Pic Is Required!`},
      }
    },
    short_description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty : {msg : `Description Is Required!`},
        notNull:   {msg : `Description Is Required!`},
      }
    },
    game_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty : {msg : `Game Url Is Required!`},
        notNull:   {msg : `Game Url Is Required!`},
      }
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty : {msg : `Genre Is Required!`},
        notNull:   {msg : `Genre Is Required!`},
      }
    },
    platform: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty : {msg : `Game Platform Is Required!`},
        notNull:   {msg : `Game Platform Is Required!`},
      }
    },
    publisher: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty : {msg : `Game Publisher Is Required!`},
        notNull:   {msg : `Game Publisher Is Required!`},
      }
    },
    developer: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty : {msg : `Game Developer Is Required!`},
        notNull:   {msg : `Game DeveloperIs Required!`},
      }
    },
    release_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate:{
        notEmpty : {msg : `Game Release Date Is Required!`},
        notNull:   {msg : `Game Release Date Is Required!`},
      }
    }
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};