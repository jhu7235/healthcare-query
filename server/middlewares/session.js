const router = require('express').Router();
const session = require('express-session');//attaches session to request obj

router.use(session({
	secret: 'HMACsalt',
	resave: false,
	saveUninitialized: false,
}));

// router.use((req, res, next) => {
// 	console.log('REQ.SESSION', req.session);
// 	next();
// });

console.log('**INITIATES SESSION');
module.exports = router;
