const Sequelize = require('sequelize');
const sequelize = require('../../sequelize');

const Post = sequelize.define('Post', {
  /**
   * @property {Message} message
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
   * @property {Title} Title
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
