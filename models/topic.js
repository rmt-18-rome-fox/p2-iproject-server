'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Topic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Topic.belongsToMany(models.User, {
        through: `UserTopic`
        // foreignKey: `TopicId`,
        // targetKey: `id`
        // through: models.UserTopic,
      })
      // Topic.hasMany(models.UserTopic, {
      //   // through: `UserTopic`,
      //   foreignKey: `TopicId`
      // })
    }
  };
  Topic.init({
    post: DataTypes.TEXT,
    like: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Topic',
  });
  return Topic;
};