'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     const dataJson = require('../db/city.list.json')
     const payload = dataJson.map(el => {
        return {
          city_id : el.id,
          city_name : el.name,
          country_code : el.country,
          lon : el.coord.lon,
          lat : el.coord.lat,
          createdAt : new Date(),
          updatedAt : new Date ()
        }
     })
     
     await queryInterface.bulkInsert('Locations', payload)
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('Locations', null, {});
  }
};
