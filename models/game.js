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
    title: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    short_description: DataTypes.STRING,
    game_url: DataTypes.STRING,
    genre: DataTypes.STRING,
    platform: DataTypes.STRING,
    publisher: DataTypes.STRING,
    developer: DataTypes.STRING,
    release_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};