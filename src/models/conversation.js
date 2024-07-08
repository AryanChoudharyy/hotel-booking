const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Conversation = sequelize.define('Conversation', {
  sessionId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  messages: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Conversation;