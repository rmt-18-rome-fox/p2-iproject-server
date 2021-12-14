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
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique :{msg : `Email Must Be Unique!`},
      validate:{
        notEmpty : {msg : `Email Is Required!`},
        notNull:   {msg : `Email Is Required!`},
        isEmail : {msg : `Invalid Email Format!`}
      }
    },
    password:  {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty : {msg : `Password Is Required!`},
        notNull:   {msg : `Password Is Required!`},
      }
    },
    role:  {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty : {msg : `Role Is Required!`},
        notNull:   {msg : `Role Is Required!`},
      }
    }
  }, {
    hooks :{
      beforeCreate(user,options){
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(user.password, salt);
        user.password = hash
  
      }
  },
    sequelize,
    modelName: 'User',
  });
  return User;
};