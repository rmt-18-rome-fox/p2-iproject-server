'use strict';

const faker = require('faker');
let fakerImage = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
const { hash } = require('../helpers/bcrypt.js');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          "name": "Anuska Sharma",
          "email": "sharma@gmail.com",
          "password": hash("sharma"),
          "photoUrl": fakerImage,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "name": "Ramesh GC",
          "email": "ramesh@gmail.com",
          "password": hash("ramesh"),
          "photoUrl": fakerImage,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "name": "Saksena",
          "email": "saksena@gmail.com",
          "password": hash("saksena"),
          "photoUrl": fakerImage,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "name": "Pragati Adhikari",
          "email": "pragati@gmail.com",
          "password": hash("william"),
          "photoUrl": fakerImage,
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
