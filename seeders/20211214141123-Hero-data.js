'use strict';
const fs = require('fs')
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
    */ let data = JSON.parse(fs.readFileSync('./data/superhero.json','utf8'))
        data.forEach(el => {
          delete el.id 
          el.createdAt = new Date()
          el.updatedAt = new Date()
        });      
        await queryInterface.bulkInsert('SuperHeros',data)
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('SuperHeros',null)
  }
};