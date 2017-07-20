const router = require('express').Router();
const User = require('../../db/user/user.model');

router.post('/login', (req, res, next) => {
	User.create({
		email: req.body.email,
		password: req.body.password,
	})
		.then(user => {
			if (!user) { res.sendStatus(401); }
			else {
				req.session.userId = user.id;
				res.json(user);
			}
		})
		.catch(next);
});

// router.post('/sign')

module.exports = router;
