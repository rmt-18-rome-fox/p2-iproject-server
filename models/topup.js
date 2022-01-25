"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TopUp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TopUp.belongsTo(models.User);
    }
  }
  TopUp.init(
    {
      transactionId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      merchant: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Pending",
      },
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "TopUp",
    }
  );
  return TopUp;
};
