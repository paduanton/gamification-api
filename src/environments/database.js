require('./base');

const {
    DB_HOST, DB_PORT,
    DB_NAME, DB_USER,
    DB_PASS
} = process.env;

const databaseEnvironment = {
    DB_HOST: DB_HOST,
    DB_PORT: DB_PORT,
    DB_NAME: DB_NAME,
    DB_USER: DB_USER,
    DB_PASS: DB_PASS
};

module.exports = databaseEnvironment;
