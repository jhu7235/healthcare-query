const Sequelize = require('sequelize');

var databaseURI = 'postgres://localhost:5432/healthcare_query';

const db = new Sequelize(databaseURI, {
	define: {
		timestamp: true,
		underscored: true,
	},
	logging: false
});

module.exports = db;
