'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('UserTopics', 
    [
      {
        UserId: 1,
        TopicId: 1,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        UserId: 2,
        TopicId: 2,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        UserId: 3,
        TopicId: 3,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        UserId: 4,
        TopicId: 4,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('UserTopics', null, {});
  }
};
