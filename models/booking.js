"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Booking.belongsTo(models.Movie, { foreignKey: "MovieId", as: "movie" });
    }
  }
  Booking.init(
    {
      UserId: DataTypes.INTEGER,
      MovieId: DataTypes.INTEGER,
      mail: DataTypes.STRING,
      qrcode: DataTypes.STRING,
      isPaid: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Booking",
    }
  );
  return Booking;
};
