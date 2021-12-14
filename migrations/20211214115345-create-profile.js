'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Profiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserId: {
        type: Sequelize.INTEGER
      },
      namaLengkap: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.TEXT
      },
      rt / rw: {
        type: Sequelize.STRING
      },
      keluarah: {
        type: Sequelize.STRING
      },
      kecamatan: {
        type: Sequelize.STRING
      },
      kota / kab: {
        type: Sequelize.STRING
      },
      provinsi: {
        type: Sequelize.STRING
      },
      lat: {
        type: Sequelize.STRING
      },
      long: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Profiles');
  }
};