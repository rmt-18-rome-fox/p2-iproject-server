'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      History.belongsTo(models.User, {foreignKey: 'UserId'})
    }
  };
  History.init({
    distance: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Distance must not be empty'},
        notNull: {msg: 'Distance must not be null'}
      }
    },
    carbonEmitted: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {msg: 'Carbon data must not be empty'},
      }
    },
    description: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'History',
  });
  return History;
};