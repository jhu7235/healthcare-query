const Sequelize = require('sequelize');

var databaseURI = 'postgres://localhost:5432/healthcare_query';

const db = new Sequelize(
	process.env.DATABASE_URL ||
	databaseURI, {
	define: {
		timestamp: true,
		underscored: true,
	},
	logging: false
});

const User = require('./user/user.model');

module.exports = db;
