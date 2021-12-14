'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PaymentStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PaymentStatus.belongsTo(models.User)
      PaymentStatus.belongsTo(models.Organization)
    }
  };
  PaymentStatus.init({
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please Follow with User ID"
        },
        notEmpty: {
          msg: "Please Follow with User ID"
        }
      }
    },
    OrganizationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please Follow with Organization ID"
        },
        notEmpty: {
          msg: "Please Follow with Organization ID"
        }
      }
    },
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PaymentStatus',
  });
  return PaymentStatus;
};