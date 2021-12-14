'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FootballClub extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  FootballClub.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'Club must be unique'
      },
      validate: {
        notNull: true,
        notEmpty: true
      }
    },
    clubPict: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true
      }
    },
  }, {
    sequelize,
    modelName: 'FootballClub',
  });
  return FootballClub;
};