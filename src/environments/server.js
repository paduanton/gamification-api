import './base';

const { SERVER_PORT, APP_ENV } = process.env;
const serverEnvironment = {
    SERVER_PORT: SERVER_PORT,
    APP_ENV: APP_ENV 
};

module.exports = serverEnvironment;
