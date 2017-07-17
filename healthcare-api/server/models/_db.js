import Sequelize from 'sequelize';

const db = new Sequelize('postgres://localhost:5432/checkpoint_senior', {
    logging: false
});

export default db;
