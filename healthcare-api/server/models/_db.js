import Sequelize from 'sequelize';

const db = new Sequelize('postgres://localhost:5432/healthcare_query', {
    logging: false
});

export default db;
