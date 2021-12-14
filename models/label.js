'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Label extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Label.hasMany(models.NoteLabel, { foreignKey: 'LabelId' });
    }
  };
  Label.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Name is required' },
        notEmpty: { msg: 'Name is required' }
      }
    },
    NoteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'Note ID is required' },
        notEmpty: { msg: 'Note ID is required' }
      }
    }
  }, {
    sequelize,
    modelName: 'Label',
  });
  return Label;
};