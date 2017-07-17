import express from 'express';
import db from '../models';
const Message = db.model('message');
const User = db.model('user');

// This router is already mounted on /messages in server/app.js
const router = express.Router();

router.get('/to/:recipientId', (req, res, next) => {
	// console.log(req.params.recipientId)
	Message.findAll({where: {toId: req.params.recipientId}, include: [{ model: User, as: 'from' }, { model: User, as: 'to' } ]})
		.then( users => res.json(users) )
})

router.get('/from/:senderId', (req, res, next) => {
	// console.log(req.params.senderId)
	Message.getAllWhereSender(req.params.senderId)
	// Message.findAll({where: {fromId: req.params.senderId}})
		.then( users => res.json(users) )
})

router.post('/', (req, res, next) => {
	console.log(req.body)
	let message = req.body
	console.log(message)
	Message.create(message)
		.then( () => res.sendStatus(201))
		.catch( next )
})

export default router;