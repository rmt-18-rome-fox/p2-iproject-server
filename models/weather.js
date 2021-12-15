'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Weather extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Weather.hasMany(models.Location, { foreignKey: "LocationId" })
    }
  };
  Weather.init({
    datetime: DataTypes.INTEGER,
    status: DataTypes.STRING,
    description: DataTypes.STRING,
    icon_url: DataTypes.STRING,
    temperature: DataTypes.INTEGER,
    feels_like: DataTypes.INTEGER,
    pressure: DataTypes.INTEGER,
    humidity: DataTypes.INTEGER,
    wing_speed: DataTypes.INTEGER,
    cloudiness: DataTypes.STRING,
    LocationId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Weather',
  });
  return Weather;
};