import Sequelize from 'sequelize';
import db from './_db';
const User = db.model('user');

const Message = db.define('message', {
	subject: {
		type:Sequelize.STRING,
		defaultValue: 'No Subject'
	},

	body: {
		type:Sequelize.STRING,
		allowNull: false
	}
}, {
	classMethods: {
		getAllWhereSender: function (userId) {
			if(userId) {
				let message = Message.findAll({where: {fromId: userId}, include: [{ model: User, as: 'from' }, { model: User, as: 'to' } ]})
				// message.then(console.log)
				return message

			} 
			else return Message.findAll()
		}
	},

	instanceMethods: {
		truncateSubject: function (length, addEllipses) {
			this.subject = this.subject.substring(0, length)
			if(addEllipses) this.subject = this.subject.concat('...')
			return this
		}
	}
});

export default Message;