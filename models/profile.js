'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profile.belongsTo(models.User)
    }
  };
  Profile.init({
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: {
        msg: "You already have a profile"
      },
      validate: {
        notEmpty: {
          msg: "Please Follow with User ID"
        },
        notNull: {
          msg: "Please Follow with User ID"
        }
      }
    },
    namaLengkap: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    alamat: DataTypes.TEXT,
    rtRw: DataTypes.STRING,
    keluarahan: DataTypes.STRING,
    kecamatan: DataTypes.STRING,
    kotaKab: DataTypes.STRING,
    provinsi: DataTypes.STRING,
    lat: DataTypes.STRING,
    long: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};