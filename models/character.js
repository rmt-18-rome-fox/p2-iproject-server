"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Character.belongsTo(models.User);
    }
  }
  Character.init(
    {
      name: DataTypes.STRING,
      gender: DataTypes.STRING,
      race: DataTypes.STRING,
      className: DataTypes.STRING,
      spell: {
        type: DataTypes.STRING,
        get() {
          const rawValue = this.getDataValue("spell");
          return rawValue ? rawValue.split(",") : null;
        },
      },
      imageUrl: DataTypes.STRING,
      UserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Character",
    }
  );
  return Character;
};
