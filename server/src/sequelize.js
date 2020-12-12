const { Sequelize } = require('sequelize')

const {
    PG_HOST,
    PG_USER,
    PG_PASSWORD,
    PG_PORT,
    PG_DB
} = process.env;

const sequelize = new Sequelize(`postgres://${PG_USER}:${PG_PASSWORD}@${PG_HOST}:${PG_PORT}/${PG_DB}`);

module.exports = sequelize
