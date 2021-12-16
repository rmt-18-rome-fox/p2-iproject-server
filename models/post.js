"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsToMany(models.User, { through: "Comments" });
      Post.belongsTo(models.User);
    }
  }
  Post.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Title is required" },
          notEmpty: { msg: "Title is required" },
        },
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Image Url is required" },
          notEmpty: { msg: "Image Url is required" },
        },
      },
      description: DataTypes.STRING,
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "User Id  is required" },
          notEmpty: { msg: "User Id  is required" },
          isInt: { msg: "User Id must be Number" },
        },
      },
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
