'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Booking.belongsTo(models.Car, {foreignKey: "carId"})
    }
  };
  Booking.init({
    price: DataTypes.INTEGER,
    status: DataTypes.STRING,
    dateStart: DataTypes.DATE,
    dateEnd: DataTypes.DATE,
    userId: DataTypes.INTEGER,
    carId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};