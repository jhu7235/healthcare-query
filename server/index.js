'use strict';
const app = require('./app');
const port = process.env.PORT || 1234;

const server = app.listen(port, (err) => {
	if (err) throw err;
	console.log('SERVER IS UP @ PORT', port);

});
