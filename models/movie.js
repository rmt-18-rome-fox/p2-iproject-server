"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movie.hasMany(models.Booking, { foreignKey: "MovieId", as: "movie" });
      Movie.belongsToMany(models.User, {
        foreignKey: "MovieId",
        through: models.Booking,
      });
    }
  }
  Movie.init(
    {
      title: DataTypes.STRING,
      genre: DataTypes.STRING,
      actors: DataTypes.STRING,
      plot: DataTypes.STRING,
      poster: DataTypes.STRING,
      imdbUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Movie",
    }
  );
  return Movie;
};
