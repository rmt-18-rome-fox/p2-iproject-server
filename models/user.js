'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Job)
      User.hasMany(models.Request)
    }
  };
  User.init({
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
    position: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Position is require'
        },
        notNull: {
          msg: 'Position is require'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'Email must unique'
      },
      validate: {
        notEmpty: {
          msg: 'Description is require'
        },
        notNull: {
          msg: 'Description is require'
        },
        isEmail: {
          msg: 'Email format is require'
        },
      }
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'phoneNumber is require'
        },
        notNull: {
          msg: 'phoneNumber is require'
        }
      }
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};