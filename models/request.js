'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Request extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Request.belongsTo(models.User)
      Request.belongsTo(models.Job)
    }
  };
  Request.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Name is require'
        },
        notNull: {
          msg: 'Name is require'
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Description is require'
        },
        notNull: {
          msg: 'Description is require'
        }
      }
    },
    JobId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Job id is require'
        },
        notNull: {
          msg: 'Job id is require'
        }
      }
    },
    EmployeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Employe id is require'
        },
        notNull: {
          msg: 'Employe id is require'
        }
      }
    },
    startDate: {
      type: DataTypes.DATE
    },
    endDate: {
      type: DataTypes.DATE
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Description is require'
        },
        notNull: {
          msg: 'Description is require'
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Request',
  });
  return Request;
};