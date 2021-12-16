'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Replies', 
    [
      {
        "post": " mountain is an elevated portion of the Earth's crust,",
        "like": 0,
        "imageUrl": "",
        "UserId": 2,
        "TopicId": 1,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "post": " mountain is an elevated portion of the Earth's crust,",
        "like": 0,
        "imageUrl": "",
        "UserId": 3,
        "TopicId": 1,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "post": "typically rising at least 300 metres (1000 feet) above the surrounding land",
        "like": 0,
        "imageUrl": "",
        "UserId": 1,
        "TopicId": 2,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "post": "typically rising at least 300 metres (1000 feet) above the surrounding land",
        "like": 0,
        "imageUrl": "",
        "UserId": 2,
        "TopicId": 3,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
    ]
    , {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Replies', null, {});
  }
};