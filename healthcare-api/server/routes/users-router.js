import express from 'express';
import db from '../models';
const User = db.model('user');
const Message = db.model('message');

// This router is already mounted on /users in server/app.js
const router = express.Router();

router.get('/', (req, res, next) => {
	User.findAll()
		.then( users => res.json(users) )
		.catch( next )
})

router.put('/:userId', (req, res, next) =>
	User.findById(req.params.userId)
		// .then( console.log )
		.then( user => user.update({email: req.body.email}))
		.then( () => res.sendStatus(201))
		.catch(next)
	)

export default router;