'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Consultation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Consultation.belongsTo(models.User, {foreignKey: "ArchitectId", as: "Architect"})
      Consultation.belongsTo(models.User, {foreignKey: "CustomerId", as: "Customer"})
    }
  };
  Consultation.init({
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Schedule Date is required'},
        notNull: {msg: 'Schedule Date is required'}
      }
    },
    endDate: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Session is required'},
        notNull: {msg: 'Session is required'}
      }
    },
    ArchitectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'ArchitedId is required'},
        notNull: {msg: 'ArchitedId is required'}
      }
    },
    CustomerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'CustomerId is required'},
        notNull: {msg: 'CustomerId is required'}
      }
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Notes is required'},
        notNull: {msg: 'Notes is required'}
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Price is required'},
        notNull: {msg: 'Price is required'}
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {msg: 'Status is required'},
        notNull: {msg: 'Status is required'}
      }
    }
  }, {
    sequelize,
    modelName: 'Consultation',
  });
  return Consultation;
};