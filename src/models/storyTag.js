const { Model } = require('sequelize');
const Story = require('./story');
const Tag = require('./tag');

module.exports = (sequelize, DataTypes) => {
  class StoryTag extends Model {
    static associate(models) {
    }
  }

  StoryTag.init({
    tagId: {
      type: DataTypes.INTEGER,
      references: {
        model: Tag,
        key: 'id'
      },
      onDelete: 'CASCADE'
    },
    storyId: {
      type: DataTypes.UUID,
      references: {
        model: Story, 
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
  }, {
    sequelize,
    modelName: 'StoryTag',
  });

  return StoryTag;
};
