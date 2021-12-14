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
    }
  };
  Profile.init({
    UserId: DataTypes.INTEGER,
    namaLengkap: DataTypes.STRING,
    alamat: DataTypes.TEXT,
    rt / rw: DataTypes.STRING,
    keluarah: DataTypes.STRING,
    kecamatan: DataTypes.STRING,
    kota / kab: DataTypes.STRING,
    provinsi: DataTypes.STRING,
    lat: DataTypes.STRING,
    long: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};