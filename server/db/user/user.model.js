'use-strict';
const db = require('../_db');
const Sequelize = require('sequelize');

const User = db.define('user', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  photo: {
    type: Sequelize.STRING,
    defaultValue: '/images/default-photo.jpg'
  },
  birthday: Sequelize.DATE,
  phone: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  googleId: Sequelize.STRING,
  githubId: Sequelize.STRING,
  twitterId: Sequelize.STRING
}, {
  scopes: {
    populated: () => ({
      include: [{
        model: db.model('story'),
        attributes: {exclude: ['paragraphs']}
      }]
    })
  }
});

module.exports = User;
