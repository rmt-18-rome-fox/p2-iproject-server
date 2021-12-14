'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Topics', 
      [
        {
          "post": "Roses are red Violets are blue I'm ugly & you are too😏",
          "like": 5,
          "imageUrl": "",
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "post": "Mountains are so cool",
          "like": 10,
          "imageUrl": "https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf-970-80.jpg.webp",
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "post": "Happy birthday dear",
          "like": 10,
          "imageUrl": "https://thumb.viva.co.id/media/frontend/thumbs3/2020/06/12/5ee2d09f54366-emma-watson_1265_711.jpg",
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "post": "Hey, everybody! My new shoes are here",
          "like": 6,
          "imageUrl": "https://media.gettyimages.com/photos/canvas-shoes-picture-id171224469?s=2048x2048",
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
      ], 
      {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Topics', null, {});
  }
};
