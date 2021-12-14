'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Job.belongsTo(models.User)
    }
  };
  Job.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Job name is require'
        },
        notNull: {
          msg: 'Job name is require'
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
    dificulty: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Dificulty is require'
        },
        notNull: {
          msg: 'Dificulty is require'
        }
      }
    },
    deadline: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Deadline is require'
        },
        notNull: {
          msg: 'Deadline is require'
        }
      }
    },
    EmployeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'EmployeId is require'
        },
        notNull: {
          msg: 'EmployeId is require'
        }
      }
    },
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Author Id is require'
        },
        notNull: {
          msg: 'Author Id is require'
        }
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Status is require'
        },
        notNull: {
          msg: 'Status is require'
        }
      }
    },
    progress: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Progress is require'
        },
        notNull: {
          msg: 'Progress is require'
        }
      }
    },
    link: {
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'Job',
  });
  return Job;
};