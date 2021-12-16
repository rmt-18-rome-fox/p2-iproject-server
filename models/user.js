'use strict';
const {
  Model
} = require('sequelize');

const bcrypt = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Product)
    }
  };
  User.init({
    username: {
      type : DataTypes.STRING,
      allowNull: false,
      unique : {msg : `Username must be unique`},
      validate : {
        notEmpty: {msg : `Fill the username!`},
        notNull : {msg : `Fill the username!`},
      }
    },
    email: {
      type : DataTypes.STRING,
      allowNull: false,
      unique : {msg : `Username must be unique`},
      validate : {
        notEmpty: {msg : `Fill the email!`},
        notNull : {msg : `Fill the email!`},
        isEmail : {msg : `False email format`}
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: `Fill the password!` },
        notNull : { msg: `Fill the password!` },
        pw(password) {
          if (password) {
            if (password.length < 8) {
              throw new Error('The password must contain 8 charaters')
            }
          }
        }
      }
    },
    role: {
      type : DataTypes.STRING,
      // allowNull: false,
      validate : {
        // notEmpty: {msg : `Fill the role!`},
        // notNull : {msg : `Role is can not be null`}
      }
    },
    phoneNumber: {
      type : DataTypes.STRING,
      allowNull: false,
      validate : {
        notEmpty: {msg : `Fill the phone number !`},
        notNull : {msg : `Fill the phone number !`},
      }
    },
    address: {
      type : DataTypes.STRING,
      allowNull: false,
      validate : {
        notEmpty: {msg : `Fill the address!`},
        notNull : {msg : `Fill the address!`},
      }
    }
  }, {
    sequelize,
    hooks: {
      beforeCreate: (instance, options) => {

        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(instance.password, salt);

        instance.password = hash

      }
    },
    modelName: 'User',
  });
  return User;
};