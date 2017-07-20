'use strict';
const app = require('./app');
const port = process.env.PORT || 1234;
const db = require('./db/_db');

const server = app.listen(port, (err) => {
	if (err) throw err;
	console.log('SERVER IS UP @ PORT', port);
	db.sync()
		.then( () => {
			console.log('POSTGRES IS UP');
		});
});

module.exports = server;
