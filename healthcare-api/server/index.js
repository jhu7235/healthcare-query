'use strict';
const app = require('./app');
const port = 1234;

const server = app.listen(port, (err) => {
	if (err) throw err;
	console.log('SERVER IS UP @ PORT', port);

});
