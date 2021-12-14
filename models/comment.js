"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsTo(models.User);
      Comment.belongsTo(models.Post);
    }
  }
  Comment.init(
    {
      comment: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Comment is required" },
          notEmpty: { msg: "Comment is required" },
        },
      },
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "User Id is required" },
          notEmpty: { msg: "User Id is required" },
          isInt: { msg: "User Id must be Number" },
        },
      },
      PostId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "Post Id is required" },
          notEmpty: { msg: "Post Id is required" },
          isInt: { msg: "Post Id must be Number" },
        },
      },
    },
    {
      sequelize,
      modelName: "Comment",
    }
  );
  return Comment;
};
