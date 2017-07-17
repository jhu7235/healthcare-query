import Sequelize from 'sequelize';
import db from './_db';

const User = db.define('user', {
	email:{
		type: Sequelize.STRING,
		allowNull: false
	}
});

export default User;