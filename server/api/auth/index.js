const router = require('express').Router();
const User = require('../../db/user/user.model');

router.post('/login', (req, res, next) => {
	User.find({
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


router.post('/signup', (req, res, next) => {
	User.create({
    birthday: req.body.birthday,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone
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

module.exports = router;
