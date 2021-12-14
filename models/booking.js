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
    dateStart: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true
      }
    },
    dateEnd: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true
      }
    },
    carId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true
      }
    }
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};