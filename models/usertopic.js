'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserTopic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserTopic.belongsTo(models.User, {
        foreignKey: `UserId`
      })
      UserTopic.belongsTo(models.Topic, {
        foreignKey: `TopicId`
      })
      // UserTopic.belongsTo(models.Reply, {
      //   foreignKey: `UserTopicId`
      // })
    }
  };
  UserTopic.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true // Automatically gets converted to SERIAL for postgres
    },
    UserId: DataTypes.INTEGER,
    TopicId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserTopic',
  });
  return UserTopic;
};