const Sequelize = require('sequelize');
const sequelize = require('../../sequelize');

const Post = sequelize.define('Post', {
  /**
   * @property {uuid} id
   * @description id of the Post
   */
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },

  /**
   * @property {string} message
   * @description Message of the post
   */
  message: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

  /**
   * @property {string} Title
   * @description Title of the post
   */
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Post;
