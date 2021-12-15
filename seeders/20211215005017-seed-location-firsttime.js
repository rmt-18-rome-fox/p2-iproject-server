'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     const dataJson = require('../db/location.json')
     dataJson.forEach(el => {
       el.city_id = el.id
       el.city_name = el.name
       el.country_code = el.country
       el.lon = el.coord.lon
       el.lat = el.coord.lat
       el.createdAt = new Date()
       el.updatedAt = new Date ()
     })
     await queryInterface.bulkInsert('Locations', dataJson)
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Locations', null, {});
  }
};
