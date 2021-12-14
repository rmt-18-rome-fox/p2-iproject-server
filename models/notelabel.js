'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NoteLabel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      NoteLabel.belongsTo(models.Label, { foreignKey: 'LabelId' });
      NoteLabel.belongsTo(models.Note, { foreignKey: 'NoteId' });
    }
  };
  NoteLabel.init({
    LabelId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'Label ID is required' },
        notEmpty: { msg: 'Label ID is required' }
      },
      references: {
        model: 'Labels',
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    },
    NoteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'Note ID is required' },
        notEmpty: { msg: 'Note ID is required' }
      },
      references: {
        model: 'Notes',
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    }
  }, {
    sequelize,
    modelName: 'NoteLabel',
  });
  return NoteLabel;
};